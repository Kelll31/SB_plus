"""Private FTP deployment helper. Credentials are read locally and never logged."""
import ftplib
import io
import json
import os
from pathlib import Path
import re
import secrets
import ssl
import sys
import urllib.request
import urllib.error
import datetime
import hashlib
import posixpath
import zipfile

ROOT = Path(__file__).resolve().parent.parent
PRIVATE = ROOT / '.deploy'
PRIVATE.mkdir(exist_ok=True)

def env_values():
    raw = (ROOT / '.env').read_bytes()
    text = raw.decode('utf-16' if raw.startswith((b'\xff\xfe', b'\xfe\xff')) else 'utf-8-sig')
    values = {}
    for line in text.splitlines():
        match = re.match(r'^\s*([A-Za-z_][\w]*)\s*=\s*(.*?)\s*$', line)
        if match:
            values[match[1].lower()] = match[2].strip().strip('\"\'')
    return values

def connect(values, *, allow_plain_ftp=None):
    host = values.get('ftp_host', 'start.gohost.ru')
    if allow_plain_ftp is None:
        allow_plain_ftp = '--allow-plain-ftp' in sys.argv
    if allow_plain_ftp:
        # Explicitly approved by the user for this legacy hosting account.
        client = ftplib.FTP(timeout=35)
        try:
            client.connect(host, int(values.get('ftp_port', '21')))
            client.login(values['ftp_login'], values['ftp_password'])
        except ftplib.all_errors:
            client.close()
            raise
        print('FTP connection: plain FTP explicitly authorized for this host')
        return client
    client = ftplib.FTP_TLS(timeout=35, context=ssl.create_default_context())
    try:
        client.connect(host, int(values.get('ftp_port', '21')))
        client.login(values['ftp_login'], values['ftp_password'])
        client.prot_p()
        print('FTP connection: TLS')
        return client
    except (ftplib.error_perm, ssl.SSLError):
        try: client.close()
        except Exception: pass
        raise RuntimeError('Secure FTPS unavailable; plain FTP is disabled')

def inspect():
    values = env_values()
    print('Configured keys:', ', '.join(sorted(values)))
    for scheme in ('https', 'http'):
        try:
            with urllib.request.urlopen(scheme + '://poligonsb.ru/', timeout=20) as response:
                print(scheme.upper(), response.status, 'URL:', response.url)
        except urllib.error.URLError as error:
            print(scheme.upper(), type(error.reason).__name__, str(error.reason)[:200])
        except Exception as error:
            print(scheme.upper(), type(error).__name__)
    probe = ftplib.FTP_TLS(timeout=20, context=ssl.create_default_context())
    try:
        probe.connect(values.get('ftp_host', 'start.gohost.ru'), 21)
        probe.auth()
        print('FTPS TLS handshake: OK')
    except Exception as error:
        print('FTPS handshake diagnostic:', type(error).__name__, str(error)[:200])
        probe.close()
        if '--allow-plain-ftp' not in sys.argv: return
    probe.close()
    ftp = connect(values)
    print('FTP current directory:', ftp.pwd())
    print('FTP entries:', json.dumps(ftp.nlst(), ensure_ascii=False))
    ftp.cwd('/www')
    print('WWW entries:', json.dumps(ftp.nlst(), ensure_ascii=False))
    ftp.quit()

def runtime_probe():
    values = env_values()
    ftp = connect(values)
    ftp.cwd('/www/poligonsb.ru')
    print('Site entries:', json.dumps(ftp.nlst(), ensure_ascii=False))
    filename = 'sb-runtime-' + secrets.token_hex(8) + '.php'
    script = b'''<?php header('Content-Type: application/json'); echo json_encode(array('php'=>PHP_VERSION,'pdo_mysql'=>extension_loaded('pdo_mysql'),'fileinfo'=>extension_loaded('fileinfo'),'openssl'=>extension_loaded('openssl'),'session'=>extension_loaded('session')));'''
    ftp.storbinary('STOR ' + filename, io.BytesIO(script))
    try:
        with urllib.request.urlopen('http://poligonsb.ru/' + filename, timeout=20) as response:
            print('Runtime:', response.read().decode('utf-8'))
    finally:
        ftp.delete(filename)
        ftp.quit()

def database_probe():
    state = deployment_state()
    ftp = connect(env_values())
    remote = '/www/poligonsb.ru/' + state['stage']
    filename = 'db-check-' + secrets.token_hex(8) + '.php'
    script = b'''<?php ini_set('display_errors','0'); header('Content-Type: application/json'); try { $c=require dirname(__FILE__).'/api/config.php'; $p=new PDO('mysql:host='.$c['db_host'].';dbname='.$c['db_name'], $c['db_user'], $c['db_password']); echo json_encode(array('connected'=>true,'server_version'=>$p->getAttribute(PDO::ATTR_SERVER_VERSION))); } catch(Exception $e) { header('HTTP/1.1 500 Internal Server Error'); echo json_encode(array('connected'=>false)); }'''
    ftp.storbinary('STOR ' + remote + '/' + filename, io.BytesIO(script))
    try:
        with urllib.request.urlopen('http://poligonsb.ru/' + state['stage'] + '/' + filename, timeout=20) as response:
            print('Database connectivity:', response.read().decode('utf-8'))
    finally:
        ftp.delete(remote + '/' + filename)
        ftp.quit()

def deployment_state():
    path = PRIVATE / 'state.json'
    if path.exists(): return json.loads(path.read_text(encoding='utf-8'))
    state = {'stage': 'sb-preview-' + secrets.token_hex(6), 'setup_key': secrets.token_urlsafe(36)}
    path.write_text(json.dumps(state), encoding='utf-8')
    return state

def php_string(value):
    return "'" + value.replace('\\', '\\\\').replace("'", "\\'") + "'"

def prepare():
    values = env_values()
    state = deployment_state()
    required = ('db_host', 'db_name', 'db_user', 'db_password')
    if any(not values.get(key) for key in required): raise RuntimeError('Database settings are incomplete')
    lines = ['<?php', '// Private server-side configuration. Never copy into client JavaScript.', 'return array(']
    for key in required:
        lines.append('    ' + php_string(key) + ' => ' + php_string(values[key]) + ',')
    lines += ['    \'setup_key\' => ' + php_string(state['setup_key']) + ',', ');', '']
    (PRIVATE / 'config.php').write_text('\n'.join(lines), encoding='utf-8')
    (PRIVATE / 'ADMIN-SETUP.txt').write_text('СБ+ — первый вход в панель управления\n\n1. Подключите HTTPS и PHP 8.2+ на хостинге.\n2. Откройте https://poligonsb.ru/#/admin\n3. Введите ключ установки из строки ниже и придумайте пароль не короче 12 символов.\n4. Сохраните пароль. После первого запуска ключ больше не позволяет создать администратора.\n\nКлюч установки: ' + state['setup_key'] + '\n\nЭтот файл храните у себя. НЕ загружайте его на сайт.\n', encoding='utf-8')
    print('Private server configuration and administrator setup instructions prepared; no secrets printed.')

def entries(ftp, path):
    result = []
    ftp.retrlines('LIST ' + path, result.append)
    out = []
    for line in result:
        parts = line.split(None, 8)
        if len(parts) < 9 or parts[0][0] not in '-d': continue
        name = parts[8]
        if name in ('.', '..') or '/' in name or '\\' in name: continue
        out.append((name, parts[0][0] == 'd'))
    return out

def backup():
    ftp = connect(env_values())
    root = '/www/poligonsb.ru'
    ftp.cwd(root)
    destination = PRIVATE / 'backups' / datetime.datetime.now().strftime('%Y%m%d-%H%M%S')
    destination.mkdir(parents=True)
    manifest = []
    total = 0
    def walk(remote, relative):
        nonlocal total
        for name, directory in entries(ftp, remote):
            if name.startswith('sb-preview-'): continue
            child = posixpath.join(remote, name)
            rel = relative / name
            if directory:
                walk(child, rel)
            else:
                if len(manifest) >= 10000 or total > 536870912: raise RuntimeError('Backup safety limit reached')
                target = (destination / rel).resolve()
                if not target.is_relative_to(destination.resolve()): raise RuntimeError('Unsafe remote file name')
                target.parent.mkdir(parents=True, exist_ok=True)
                with target.open('wb') as file: ftp.retrbinary('RETR ' + child, file.write)
                total += target.stat().st_size
                manifest.append({'path': rel.as_posix(), 'size': target.stat().st_size, 'sha256': hashlib.sha256(target.read_bytes()).hexdigest()})
    try: walk(root, Path())
    finally: ftp.quit()
    (destination / 'backup-manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
    state = deployment_state(); state['backup'] = str(destination); (PRIVATE / 'state.json').write_text(json.dumps(state), encoding='utf-8')
    print('Backup completed:', len(manifest), 'files,', total, 'bytes. Location:', destination)

def ensure_dir(ftp, path):
    parts = path.strip('/').split('/')
    current = ''
    for part in parts:
        current += '/' + part
        try: ftp.mkd(current)
        except ftplib.error_perm:
            previous = ftp.pwd(); ftp.cwd(current); ftp.cwd(previous)

def upload_tree(ftp, remote, production=False):
    source = ROOT / 'build_source/dist'
    preserve_registry = production and any(name == 'content.json' and not directory for name, directory in entries(ftp, remote))
    files = sorted(p for p in source.rglob('*') if p.is_file() and p.name not in ('config.php', 'index.html'))
    for file in files:
        relative = file.relative_to(source).as_posix()
        if preserve_registry and relative == 'content.json': continue
        if relative.startswith('api/storage/') and relative != 'api/storage/.htaccess': continue
        target = remote + '/' + relative
        ensure_dir(ftp, posixpath.dirname(target))
        with file.open('rb') as stream: ftp.storbinary('STOR ' + target, stream)
    if (PRIVATE / 'config.php').is_file():
        with (PRIVATE / 'config.php').open('rb') as stream: ftp.storbinary('STOR ' + remote + '/api/config.php', stream)
    temporary = remote + '/index.html.sb-upload-' + secrets.token_hex(4)
    with (source / 'index.html').open('rb') as stream: ftp.storbinary('STOR ' + temporary, stream)
    ftp.rename(temporary, remote + '/index.html')
    print('Uploaded', len(files) + 2, 'files. Entry page switched last.')

def stage():
    prepare()
    state = deployment_state()
    remote = '/www/poligonsb.ru/' + state['stage']
    ftp = connect(env_values())
    try:
        ensure_dir(ftp, remote)
        upload_tree(ftp, remote)
    finally: ftp.quit()
    url = 'http://poligonsb.ru/' + state['stage'] + '/'
    verify(url)
    print('Preview URL:', url)

def verify(url):
    source = ROOT / 'build_source/dist'
    with urllib.request.urlopen(url, timeout=25) as response:
        html = response.read().decode('utf-8')
        if response.status != 200 or '<div id="root"></div>' not in html: raise RuntimeError('Entry page verification failed')
        if html != (source / 'index.html').read_text(encoding='utf-8'): raise RuntimeError('Entry page differs from local release')
    # Include lazy-loaded modules (3D scene and admin), not only entry assets.
    paths = [file.relative_to(source).as_posix() for file in (source / 'assets').iterdir() if file.is_file() and file.suffix in ('.js', '.css')]
    # Texture files and the HDR environment are essential to the published scene.
    industrial = source / 'images/industrial'
    if industrial.exists():
        paths += [file.relative_to(source).as_posix() for file in industrial.rglob('*') if file.suffix in ('.jpg', '.hdr', '.webp')]
    for path in paths:
        with urllib.request.urlopen(url + path, timeout=25) as response:
            actual = response.read()
            if response.status != 200 or hashlib.sha256(actual).digest() != hashlib.sha256((source / path).read_bytes()).digest(): raise RuntimeError('Asset verification failed')
    with urllib.request.urlopen(url + 'api/index.php?action=content', timeout=25) as response:
        content = json.load(response)
        if not isinstance(content.get('licenses'), list): raise RuntimeError('Public content verification failed')
    print('HTTP verification passed: entry page,', len(paths), 'bundles and scene assets, public content API.')

def deploy():
    state = deployment_state()
    backup_path = Path(state.get('backup', ''))
    if not (backup_path / 'backup-manifest.json').is_file() or not (backup_path / 'index.html').is_file(): raise RuntimeError('A verified local backup is required before deployment')
    verify('http://poligonsb.ru/' + state['stage'] + '/')
    ftp = connect(env_values())
    try: upload_tree(ftp, '/www/poligonsb.ru', production=True)
    finally: ftp.quit()
    verify('http://poligonsb.ru/')
    state['deployed_at'] = datetime.datetime.now().isoformat(); (PRIVATE / 'state.json').write_text(json.dumps(state), encoding='utf-8')
    print('Production site deployed: http://poligonsb.ru/')

def package():
    prepare()
    directory = ROOT / 'artifacts'; directory.mkdir(exist_ok=True)
    archive = directory / 'sb-plus-site.zip'
    with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as output:
        for file in (ROOT / 'build_source/dist').rglob('*'):
            if file.is_file() and file.name != 'config.php': output.write(file, file.relative_to(ROOT / 'build_source/dist').as_posix())
        output.write(PRIVATE / 'config.php', 'api/config.php')
    print('Prepared private deployment archive:', archive)

if __name__ == '__main__':
    try:
        if len(sys.argv) > 1 and sys.argv[1] == 'inspect': inspect()
        elif len(sys.argv) > 1 and sys.argv[1] == 'probe': runtime_probe()
        elif len(sys.argv) > 1 and sys.argv[1] == 'db-probe': database_probe()
        elif len(sys.argv) > 1 and sys.argv[1] == 'prepare': prepare()
        elif len(sys.argv) > 1 and sys.argv[1] == 'backup': backup()
        elif len(sys.argv) > 1 and sys.argv[1] == 'stage': stage()
        elif len(sys.argv) > 1 and sys.argv[1] == 'deploy': deploy()
        elif len(sys.argv) > 1 and sys.argv[1] == 'package': package()
        else: print('Use: python scripts/hosting.py inspect')
    except Exception as error:
        print('Hosting operation failed:', type(error).__name__)
        sys.exit(1)

"""End-to-end PHP API tests against an isolated, local SQLite database."""
from pathlib import Path
import copy
import http.cookiejar
import json
import secrets
import shutil
import socket
import subprocess
import time
import urllib.error
import urllib.request
import uuid

ROOT = Path(__file__).resolve().parent.parent
PHP = ROOT / '.deploy/php/php.exe'
TEST_ROOT = ROOT / '.deploy' / ('test-' + secrets.token_hex(5))
TEST_ROOT.mkdir(parents=True)
shutil.copytree(ROOT / 'build_source/public', TEST_ROOT, dirs_exist_ok=True, ignore=shutil.ignore_patterns('config.php'))
KEY = secrets.token_hex(32)
PASSWORD = secrets.token_urlsafe(24)
config = "<?php return array('test_sqlite'=>'" + str(TEST_ROOT / 'test.sqlite').replace('\\', '/') + "','setup_key'=>'" + KEY + "');"
(TEST_ROOT / 'api/config.php').write_text(config, encoding='utf-8')
with socket.socket() as sock:
    sock.bind(('127.0.0.1', 0))
    port = sock.getsockname()[1]
base = 'http://127.0.0.1:' + str(port)
log = open(TEST_ROOT / 'php.log', 'w')
process = subprocess.Popen([str(PHP), '-d', 'extension_dir=' + str(PHP.parent / 'ext'), '-d', 'extension=pdo_sqlite', '-d', 'extension=fileinfo', '-S', '127.0.0.1:' + str(port), '-t', str(TEST_ROOT)], stdout=log, stderr=log)
cookies = http.cookiejar.CookieJar()
browser = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cookies))
csrf = ''
checks = 0

def call(action, body=None, token=True, raw=None, mime=None, opener=None):
    headers = {}
    if body is not None:
        raw = json.dumps(body).encode()
        headers['Content-Type'] = 'application/json'
    if mime: headers['Content-Type'] = mime
    if raw is not None and token: headers['X-CSRF-Token'] = csrf
    req = urllib.request.Request(base + '/api/index.php?action=' + action, data=raw, headers=headers)
    try:
        response = (opener or browser).open(req, timeout=10)
    except urllib.error.HTTPError as e:
        response = e
    data = response.read()
    try: data = json.loads(data)
    except (ValueError, UnicodeDecodeError): pass
    return response.status, data, response.headers

def check(condition, label):
    global checks
    assert condition, label
    checks += 1
    print('PASS:', label)

try:
    for _ in range(50):
        try:
            status, result, headers = call('status')
            break
        except OSError:
            time.sleep(.1)
    else: raise RuntimeError('Local PHP server did not start')
    check(status == 200 and not result['configured'], 'first-run status')
    csrf = result['csrf']
    check(call('admin-content')[0] == 401, 'anonymous admin read rejected')
    check(call('setup', {'setupKey': KEY, 'password': PASSWORD}, token=False)[0] == 403, 'missing CSRF rejected')
    check(call('setup', {'setupKey':'incorrect', 'password':PASSWORD})[0] == 403, 'invalid setup key rejected')
    status, result, headers = call('setup', {'setupKey':KEY, 'password':PASSWORD})
    check(status == 200, 'administrator initialized')
    csrf = result['csrf']
    check('HttpOnly' in headers.get('Set-Cookie', '') and 'SameSite=Strict' in headers.get('Set-Cookie', ''), 'session cookie has security flags')
    check(call('setup', {'setupKey':KEY, 'password':PASSWORD})[0] == 409, 'setup cannot replace administrator')
    status, content, _ = call('admin-content')
    check(status == 200 and content['revision'] == 0, 'authenticated content read')
    stale = copy.deepcopy(content)
    post = {'id':'integration-post', 'title':'Тест <script>alert(1)</script>', 'excerpt':'Тестовая публикация', 'body':'Первый абзац.\n\nВторой абзац.', 'date':'2026-11-14', 'category':'Новости компании', 'cover':'', 'published':False}
    content['posts'].append(post)
    status, content, _ = call('save', content)
    check(status == 200 and content['revision'] == 1, 'draft saved persistently')
    check(not call('content')[1]['posts'], 'draft omitted from public API')
    check(call('save', stale)[0] == 409, 'concurrent stale overwrite rejected')
    bad = copy.deepcopy(content); bad['posts'][0]['cover'] = 'javascript:alert(1)'
    check(call('save', bad)[0] == 400, 'unsafe image URL rejected')
    bad = copy.deepcopy(content); bad['posts'][0]['date'] = '2026-02-31'
    check(call('save', bad)[0] == 400, 'impossible date rejected')
    content['posts'][0]['published'] = True
    status, content, _ = call('save', content)
    check(status == 200 and call('content')[1]['posts'][0]['title'] == post['title'], 'published post available with literal text')
    boundary = secrets.token_hex(16)
    def multipart(filename, mime, data, **fields):
        text = ''.join(f'--{boundary}\r\nContent-Disposition: form-data; name="{key}"\r\n\r\n{value}\r\n' for key, value in fields.items())
        return (text+'--'+boundary+'\r\nContent-Disposition: form-data; name="file"; filename="'+filename+'"\r\nContent-Type: '+mime+'\r\n\r\n').encode()+data+('\r\n--'+boundary+'--\r\n').encode()
    status, upload, _ = call('upload', raw=multipart('scan.jpg','image/jpeg',(ROOT/'build_source/public/images/l7.jpg').read_bytes()), mime='multipart/form-data; boundary='+boundary)
    check(status == 200 and upload['file'].startswith('api/index.php?action=file&id='), 'image upload accepted')
    url = upload['file']; file_id = url.split('id=')[1]
    status, image_bytes, image_headers = call('file&id=' + file_id)
    check(status == 200 and isinstance(image_bytes, bytes) and image_bytes[:3] == b'\xff\xd8\xff' and image_headers.get_content_type() == 'image/jpeg', 'file served with correct MIME and without PHP guard')
    check(call('upload', raw=multipart('malicious.jpg','image/jpeg',b'<?php echo "bad"; ?>'), mime='multipart/form-data; boundary='+boundary)[0] == 400, 'disguised executable upload rejected')
    check(call('file&id=../../config.php')[0] == 404, 'file path traversal rejected')
    doc = {'id':'integration-license','title':'Тестовый документ','description':'Проверка загрузки','number':'123','file':url,'archived':False,'published':True,'showOnHome':False,'homeOrder':1}
    content['licenses'].append(doc)
    status, content, _ = call('save', content)
    check(status == 200 and doc in call('content')[1]['licenses'], 'home page visibility and order survive a save')
    mime = 'multipart/form-data; boundary=' + boundary
    scan = (ROOT/'build_source/public/images/l7.jpg').read_bytes()
    new_document = multipart('certificate.jpg', 'image/jpeg', scan, id=str(uuid.uuid4()), title='Сертификат для проверки', number='456')
    check(call('add-document', raw=new_document, mime=mime, token=False)[0] == 403, 'document addition requires CSRF')
    check(call('add-document', raw=multipart('scan.jpg', 'image/jpeg', scan), mime=mime)[0] == 400, 'missing document title rejected')
    status, added, _ = call('add-document', raw=new_document, mime=mime)
    new_doc = added['licenses'][0]
    check(status == 200 and new_doc['number'] == '456' and new_doc in call('content')[1]['licenses'], 'document upload and publication in one request')
    check(call('add-document', raw=new_document, mime=mime)[1] == added, 'upload retry does not duplicate the document')
    check(call('file&id=' + new_doc['file'].split('id=')[1])[1] == scan, 'published scan opens from its public URL')
    check(call('remove-document', {'id':new_doc['id']}, token=False)[0] == 403, 'document removal requires CSRF')
    status, removed, _ = call('remove-document', {'id':new_doc['id']})
    check(status == 200 and removed['licenses'] == content['licenses'] and removed['posts'] == content['posts'], 'removal keeps all other content')
    check(new_doc not in call('content')[1]['licenses'] and call('file&id=' + new_doc['file'].split('id=')[1])[0] == 404, 'removed document and uploaded scan unavailable publicly')
    check(call('remove-document', {'id':new_doc['id']})[1] == removed, 'repeating removal is safe')
    new_password = secrets.token_urlsafe(24)
    status, result, _ = call('password', {'currentPassword':PASSWORD, 'password':new_password})
    check(status == 200, 'administrator password changed')
    csrf = result['csrf']
    check(call('logout', {})[0] == 200, 'administrator logged out')
    check(call('admin-content')[0] == 401, 'admin access revoked after logout')
    csrf = call('status')[1]['csrf']
    check(call('login', {'password':PASSWORD})[0] == 401, 'old password rejected')
    status, result, _ = call('login', {'password':new_password})
    check(status == 200, 'new password accepted')
    csrf = result['csrf']
    check(len(call('admin-content')[1]['posts']) == 1, 'content survives logout and login')
    call('logout', {}); csrf = call('status')[1]['csrf']
    for _ in range(10):
        status = call('login', {'password':'wrong'})[0]
        if status == 429: break
    check(status == 429, 'login rate limiting enforced')
    print('Completed', checks, 'integration checks. Test data stayed in the isolated local database.')
finally:
    process.terminate()
    process.wait(timeout=10)
    log.close()

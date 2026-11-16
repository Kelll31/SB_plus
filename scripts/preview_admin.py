"""Serve a disposable local copy with PHP and SQLite for browser QA."""
from pathlib import Path
import json
import secrets
import shutil
import subprocess
import sys

root = Path(__file__).resolve().parent.parent
php = root / '.deploy/php/php.exe'
target = root / '.deploy' / ('browser-qa-' + secrets.token_hex(4))
shutil.copytree(root / 'build_source/dist', target)
key = secrets.token_urlsafe(36)
(target / 'api/config.php').write_text("<?php return array('test_sqlite'=>'" + str(target/'qa.sqlite').replace('\\','/') + "','setup_key'=>'" + key + "');", encoding='utf-8')
(root / '.deploy/qa-setup.json').write_text(json.dumps({'setupKey':key,'url':'http://127.0.0.1:3001/','root':str(target)}), encoding='utf-8')
print('Isolated administrator preview: http://127.0.0.1:3001/', flush=True)
sys.exit(subprocess.call([str(php), '-d', 'extension_dir='+str(php.parent/'ext'), '-d', 'extension=pdo_sqlite', '-d', 'extension=fileinfo', '-S', '127.0.0.1:3001', '-t', str(target)]))

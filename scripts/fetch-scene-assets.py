"""Fetch unmodified, CC0 source maps. Assets are served locally by the website."""
import hashlib
import json
from pathlib import Path
import urllib.request

OUT = Path(__file__).resolve().parents[1] / 'build_source/public/images/industrial'
ASSETS = {
    'asphalt_02': ('asphalt', ['Diffuse', 'nor_gl', 'Rough']),
    'concrete_floor_worn_001': ('concrete', ['Diffuse', 'nor_gl', 'Rough']),
    'aerial_grass_rock': ('terrain', ['Diffuse', 'nor_gl']),
    'kloofendal_48d_partly_cloudy': ('daylight', ['hdri']),
    'factory_wall': ('wall', ['Diffuse', 'nor_gl', 'Rough']),
    'galvanized_sheet_metal': ('zinc', ['Diffuse', 'nor_gl', 'Rough']),
}

def fetch(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'SBPlusWebsite/1.0'})
    return urllib.request.urlopen(request, timeout=60).read()

OUT.mkdir(parents=True, exist_ok=True)
credits = ['# Industrial scene source assets', '', 'Unmodified 1K maps from Poly Haven. License: CC0.', 'https://polyhaven.com/license', '']
for asset, (name, maps) in ASSETS.items():
    manifest = json.loads(fetch('https://api.polyhaven.com/files/' + asset))
    credits.append(f'- {asset}: https://polyhaven.com/a/{asset}')
    for kind in maps:
        key = next(key for key in manifest if key.lower() == kind.lower())
        ext = 'hdr' if kind == 'hdri' else 'jpg'
        entry = manifest[key]['1k'][ext]
        filename = f'{name}-{kind.lower()}.{ext}'
        target = OUT / filename
        data = target.read_bytes() if target.exists() else b''
        if hashlib.md5(data).hexdigest() != entry['md5']:
            data = fetch(entry['url'])
        if hashlib.md5(data).hexdigest() != entry['md5']:
            raise RuntimeError('Asset checksum mismatch')
        (OUT / filename).write_bytes(data)
        print(filename, len(data))
(OUT / 'CREDITS.md').write_text('\n'.join(credits) + '\n', encoding='utf-8')

"""Create the smaller textures used by the flight from the locally stored CC0 maps."""
from pathlib import Path

import cv2
from PIL import Image

SOURCE = Path(__file__).resolve().parents[1] / 'build_source/public/images/industrial'
DESTINATION = SOURCE / 'r2'

DESTINATION.mkdir(exist_ok=True)
for source in sorted(SOURCE.glob('*.jpg')):
    if source.stem.endswith('-rough'):
        size, quality = 256, 77
    elif source.stem.endswith('-nor_gl'):
        size, quality = 512, 87
    else:
        size, quality = 1024, 83
    with Image.open(source) as image:
        texture = image.convert('RGB')
        texture.thumbnail((size, size), Image.Resampling.LANCZOS)
        texture.save(DESTINATION / f'{source.stem}.webp', quality=quality, method=6)

name = 'daylight-hdri.hdr'
sky = cv2.imread(str(SOURCE / name), cv2.IMREAD_UNCHANGED)
if sky is None:
    raise RuntimeError('Unable to read HDR sky')
height, width = sky.shape[:2]
smaller = cv2.resize(sky, (512, round(height * 512 / width)), interpolation=cv2.INTER_AREA)
if not cv2.imwrite(str(DESTINATION / name), smaller):
    raise RuntimeError('Unable to write HDR sky')

for asset in sorted(DESTINATION.iterdir()):
    print(asset.name, asset.stat().st_size)

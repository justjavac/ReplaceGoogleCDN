import json
import struct
import sys
from pathlib import Path


PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"
project_dir = Path(__file__).resolve().parents[1]
manifest_files = [
    project_dir / "extension" / "manifest.json",
    project_dir / "extension-v2" / "manifest.json",
]


def png_dimensions(path):
    data = path.read_bytes()
    if len(data) < 24 or data[:8] != PNG_SIGNATURE or data[12:16] != b"IHDR":
        raise ValueError("not a valid PNG file")
    return struct.unpack(">II", data[16:24])


failures = []

for manifest_file in manifest_files:
    manifest = json.loads(manifest_file.read_text(encoding="utf-8"))
    icons = manifest.get("icons", {})

    for declared_size, icon_path in icons.items():
        try:
            expected = int(declared_size)
        except ValueError:
            failures.append(f"{manifest_file}: icon size is not numeric: {declared_size}")
            continue

        full_icon_path = manifest_file.parent / icon_path
        if not full_icon_path.exists():
            failures.append(f"{manifest_file}: missing icon file {icon_path}")
            continue

        try:
            width, height = png_dimensions(full_icon_path)
        except ValueError as error:
            failures.append(f"{full_icon_path}: {error}")
            continue

        if (width, height) != (expected, expected):
            failures.append(
                f"{manifest_file}: {icon_path} is {width}x{height}, expected "
                f"{expected}x{expected}"
            )

if failures:
    print("Icon checks failed:", file=sys.stderr)
    for failure in failures:
        print(f"- {failure}", file=sys.stderr)
    sys.exit(1)

print("Icon checks passed.")

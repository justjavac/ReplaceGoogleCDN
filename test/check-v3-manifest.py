import json
import subprocess
import sys
from pathlib import Path


project_dir = Path(__file__).resolve().parents[1]
manifest_file = project_dir / "var" / "extension-tmp" / "manifest.json"
script_file = project_dir / "tools" / "update-v3-manifest.py"


def generate_manifest(browser):
    subprocess.run(
        [sys.executable, str(script_file), browser],
        cwd=project_dir,
        check=True,
    )
    return json.loads(manifest_file.read_text(encoding="utf-8"))


def require(condition, message):
    if not condition:
        raise AssertionError(message)


chromium_manifest = generate_manifest("chromium")
require(
    chromium_manifest.get("background", {}).get("service_worker")
    == "js/background.js",
    "chromium manifest must use background.service_worker",
)
require(
    "browser_specific_settings" not in chromium_manifest,
    "chromium manifest must not include gecko settings",
)
require("options_ui" in chromium_manifest, "chromium manifest must keep options_ui")
require("sandbox" in chromium_manifest, "chromium manifest must keep sandbox")

firefox_manifest = generate_manifest("firefox")
firefox_rule_paths = {
    rule["path"]
    for rule in firefox_manifest["declarative_net_request"]["rule_resources"]
}
require(
    firefox_manifest.get("background", {}).get("page") == "background-page.html",
    "firefox manifest must use background.page",
)
require(
    "browser_specific_settings" in firefox_manifest,
    "firefox manifest must include gecko settings",
)
require("options_ui" not in firefox_manifest, "firefox manifest must remove options_ui")
require("sandbox" not in firefox_manifest, "firefox manifest must remove sandbox")
require(
    "rules/rules-default-domains-helper.json" not in firefox_rule_paths,
    "firefox manifest must not reference rules-default-domains-helper.json",
)

print("Manifest checks passed.")

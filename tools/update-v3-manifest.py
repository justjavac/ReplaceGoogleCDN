import json
import os
import sys


def get_manifest_data():
    if os.path.isfile(manifest_file):

        with open(manifest_file, mode='r', encoding='utf-8') as f:
            content = f.read()
            manifest = json.loads(content)
            return manifest
    else:
        print('file  ' + manifest_file + ' no found !')
        exit(3)


def set_manifest_data(manifest, key, value):
    if key in manifest:
        if value:
            manifest[key] = json.loads(value)
        else:
            del manifest[key]
    else:
        if value:
            manifest[key] = json.loads(value)
    return manifest


def override_manifest(manifest):
    with open(manifest_file, mode='w') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    comment = '''
      用法：python3 tools/update-v3-manifest.py [ chromium | firefox ]
      
      例子：( 默认为 firefox mainifest 配置)

      python3 tools/update-v3-manifest.py  chromium
      python3 tools/update-v3-manifest.py  firefox
      
     '''

    project_dir = os.path.abspath(os.path.dirname(__file__) + '/../')
    manifest_file = project_dir + '/var/extension-tmp/manifest.json'
    manifest_data = get_manifest_data()

    browser = 'firefox'
    if len(sys.argv) > 1 and sys.argv[1] is not None:
        browser = sys.argv[1]

    if browser == '--help' or browser == '-h':
        print(comment)
        exit(0)
    else:
        browser = 'firefox'

    # chromium config
    chromium_background_content = '''
    {
        "service_worker": "js/background.js",
        "type": "module"
    }
    '''
    chromium_sandbox_content = '''
    {
        "pages": [
            "sandbox/index.html"
        ]
    }
    '''
    chromium_content_security_policy_sandbox_content = '''
    {
        "extension_pages": "default-src 'self';script-src 'self'  'wasm-unsafe-eval'  ;object-src 'self'; style-src 'self' 'unsafe-inline' ; connect-src   https://justjavac.com https://justjavac.github.io https://*.justjavac.com/ https://*.jingjingxyk.com https://jingjingxyk.github.io  http://localhost https://raw.githubusercontent.com https://github.com https://gitee.com https://gitcode.net;",
        "sandbox": "sandbox allow-scripts allow-popups; script-src 'unsafe-inline' 'unsafe-eval'  "
    }
    '''
    chromium_browser_specific_settings = None

    # firefox config
    firefox_background_content = '''
    {
        "page": "background-page.html"
    }
    '''
    firefox_sandbox_content = None
    firefox_content_security_policy_sandbox_content = '''
    {
        "extension_pages": "default-src 'self';script-src 'self'  'wasm-unsafe-eval'  ;object-src 'self'; style-src 'self' 'unsafe-inline' ; connect-src   https://justjavac.com https://justjavac.github.io https://*.justjavac.com/ https://*.jingjingxyk.com https://jingjingxyk.github.io  http://localhost https://raw.githubusercontent.com https://github.com https://gitee.com https://gitcode.net;"
    }
    '''
    firefox_specific_settings = '''
    {
        "gecko": {
            "id": "zonghengbaihe521@qq.com",
            "strict_min_version": "120.0"
        }
    }
    '''

    background_content = chromium_background_content
    sandbox_content = chromium_sandbox_content
    content_security_policy_sandbox_content = chromium_content_security_policy_sandbox_content
    browser_specific_settings = chromium_browser_specific_settings
    if browser == "firefox":
        background_content = firefox_background_content
        sandbox_content = firefox_sandbox_content
        content_security_policy_sandbox_content = firefox_content_security_policy_sandbox_content
        browser_specific_settings = firefox_specific_settings

    manifest_data = set_manifest_data(manifest_data, 'background', background_content)
    manifest_data = set_manifest_data(manifest_data, 'sandbox', sandbox_content)
    manifest_data = set_manifest_data(manifest_data, 'content_security_policy', content_security_policy_sandbox_content)
    manifest_data = set_manifest_data(manifest_data, 'browser_specific_settings', browser_specific_settings)
    manifest_data = set_manifest_data(manifest_data, 'options_ui', '')
    override_manifest(manifest_data)

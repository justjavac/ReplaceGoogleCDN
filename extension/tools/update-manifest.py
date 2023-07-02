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
    manifest[key] = json.loads(value);
    with open(manifest_file, mode='w') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    comment = '''
      用法：python3 extension/tools/update-manifest.py [ chromium | firefox ] 
      
      例子：( 默认为 chromium mainifest 配置) 
      python3 update-manifest.py  chromium 
      python3 update-manifest.py  firefox
      
     '''

    project_dir = os.path.abspath(os.path.dirname(__file__) + '/../')
    manifest_file = project_dir + '/manifest.json'
    manifest_data = get_manifest_data()

    browser = 'chromium'
    if len(sys.argv) > 1 and sys.argv[1] is not None:
        browser = sys.argv[1]

    if browser == '--help' or browser == '-h':
        print(comment)
        exit(0)

    chromium_content = '''
    {
        "service_worker": "js/background.js",
        "type": "module"
    }
    '''

    firefox_content = '''
    {
        "page": "background-page.html"
    }
    '''

    content = chromium_content
    if browser == "firefox":
        content = firefox_content

    set_manifest_data(manifest_data, 'background', content)

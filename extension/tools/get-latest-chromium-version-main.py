# encoding=utf-8
import requests
import sys
import platform


def get_latest_aliyun_mirror_chromium_version(os):
    res = requests.get("https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/" + os + "/").json()
    # print(type(res))
    maxs = [];
    for i in res:
        i["name"] = i['name'].rstrip("/")
        maxs.append(int(i['name']))
    maxs.sort(key=None, reverse=True)
    return maxs[0]


if __name__ == '__main__':
    comment = '''
     用法： python3 get-latest-chromium-version-main.py [ --platform ]
     例子：
     python3 get-latest-chromium-version-main.py  linux
     python3 get-latest-chromium-version-main.py  win 
     python3 get-latest-chromium-version-main.py  darwin 
    '''

    os = platform.system()
    if len(sys.argv) > 1 and sys.argv[1] is not None:
        os = sys.argv[1]
    # print(os)

    os_platform = None
    if os == "linux" or os == "Linux":
        os_platform = "Linux_x64"
    elif os == "darwin" or os == "Darwin":
        os_platform = "Mac"
    elif os == "win" or os == "Windows":
        os_platform = "Win_x64"
    elif os == "-h" or os == "--h":
        print(comment)
        exit(0)
    elif os == "--help" or os == "-help":
        print(comment)
        exit()
    else:
        os_platform = None
    # print(os_platform)
    if os_platform is not None:
        latest_version = get_latest_aliyun_mirror_chromium_version(os_platform)
        # print(latest_version)
        pre_download_url = "https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/" + os_platform + "/" + str(
            latest_version) + "/"
        download_url = requests.get(pre_download_url).json()[0]["url"]
        print(download_url)
    else:
        print("no recognize OS ARCH")
        exit(1)

#!/bin/bash

set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

__PROJECT__=$(
  cd ${__DIR__}/../
  pwd
)
cd ${__PROJECT__}

OS=$(uname -s)
ARCH=$(uname -m)
echo "$OS"

FIREFOX=''
UUID=''
case $OS in
"Linux")
  UUID=$(cat /proc/sys/kernel/random/uuid)
  FIREFOX=${__PROJECT__}/var/firefox/firefox
  ;;
"Darwin")
  UUID=$(uuidgen)
  # macos firefox 默认启动目录
  FIREFOX='/Applications/Firefox.app/Contents/MacOS/firefox'
  # 自定义 启动目录
  FIREFOX="${__PROJECT__}/var/firefox/Firefox.app/Contents/MacOS/firefox"
 ;;
'MINGW64_NT'* | 'MSYS_NT'*)
  # FIREFOX="C:\Program Files\Mozilla Firefox\firefox.exe"
  exit 0
  ;;
*)
    echo 'current script no support !'
    exit 0
;;
esac

profile_folder="/tmp/${UUID}"

mkdir -p $profile_folder

## 生成支持firefox 的扩展
bash release-archive-v3.sh


# firefox web extension
# https://github.com/mdn/webextensions-examples.git

# https://wiki.mozilla.org/Firefox/CommandLineOptions

# firefox use Manifest V3
# https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/

#  declarativeNetRequestWithHostAccess   声明式网络请求
# https://github.com/mdn/webextensions-examples/blob/main/dnr-dynamic-with-options/manifest.json
#  "permissions": ["declarativeNetRequestWithHostAccess"],
#  "optional_host_permissions": ["*://*/"],
#  "optional_permissions": ["*://*/"],

# 支持 ResourceType
# https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest/ResourceType


# 它使用 user.js 中的相应设置覆盖 prefs.js 中的任何设置。
cp -f ${__PROJECT__}/tools/prefs.js $profile_folder

# 进入扩展所在目录
cd ${__PROJECT__}/dist/ReplaceGoogleCDN-v3-firefox/

# reference https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-run

npx web-ext run \
  --verbose \
  --firefox=${FIREFOX} \
  --firefox-profile=$profile_folder \
  --profile-create-if-missing \
  --arg="--new-tab=https://stackoverflow.com/tags/socat/hot?filter=all" \
  --start-url https://m3.material.io/

#   --devtools \
#   --browser-console \


exit 0

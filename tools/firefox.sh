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

XVFB_COMMAND=''
HEADLESS_MODE=''

while [ $# -gt 0 ]; do
  case "$1" in
  --xvfb)
      XVFB_COMMAND='xvfb-run  -s "-terminate -screen 0 1920x1080x24" '
      XVFB_COMMAND=''
    ;;
  --xwfb)
      XVFB_COMMAND='xwfb-run  '
    ;;
  --headless)
      HEADLESS_MODE='-headless '
    ;;
  *)
    ;;
  esac
  shift $(($# > 0 ? 1 : 0))
done

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
  FIREFOX="${__PROJECT__}/var/firefox/Firefox.app/Contents/MacOS/firefox-bin"
 ;;
'MINGW64_NT'* | 'MSYS_NT'*)
  # FIREFOX="C:\Program Files\Mozilla Firefox\firefox.exe" --version
  ;;
*)
    echo 'current script no support !'
    exit 0
;;
esac


profile_folder="/tmp/${UUID}"

mkdir -p $profile_folder


mkdir -p ${__PROJECT__}/var/
cd ${__PROJECT__}/var/


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

# 启动firefox 实例

${XVFB_COMMAND} ${FIREFOX} \
  -profile "$profile_folder" ${HEADLESS_MODE} \
  -start-debugger-server 9221 \
  --remote-debugging-port 9222 \
  about:debugging#/runtime/this-firefox

# Firefox supports several remote protocols   https://firefox-source-docs.mozilla.org/remote/index.html
# -start-debugger-server  vs  --remote-debugging-port
# -start-debugger-server 9221 \
# -devtools \
# -jsconsole \
#  about:blank

# 此命令已不可用
# -install-global-extension  ${__ROOT__}/extension-v2 \
# -install-global-extension ${__DIR__}/traduzir_paginas_web-9.8.1.0.xpi \

# 新版Firefox 允许通过 RDP（远程调试协议）安装插件
# gecko-dev
# https://github.com/mozilla/gecko-dev.git


# CommandLineOptions
# https://wiki.mozilla.org/Firefox/CommandLineOptions
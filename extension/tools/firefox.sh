#!/bin/bash

set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

__PROJECT__=$(
  cd ${__DIR__}/../../
  pwd
)

uuid=$(cat /proc/sys/kernel/random/uuid)
profile_folder="/tmp/${uuid}"

mkdir -p $profile_folder

cd ${__PROJECT__}

python3 extension/tools/update-manifest.py  firefox

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

cd ${__PROJECT__}/extension/tools/
# 它使用 user.js 中的相应设置覆盖 prefs.js 中的任何设置。
cp -f prefs.js $profile_folder

# cd ${__PROJECT__}/extension-v2
cd ${__PROJECT__}/extension
# reference https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-run

npx web-ext run \
  --verbose \
  --devtools \
  --firefox=${__PROJECT__}/extension/tools/firefox/firefox \
  --firefox-profile=$profile_folder \
  --profile-create-if-missing \
  --arg="--new-tab=https://stackoverflow.com/tags/socat/hot?filter=all" \
  --start-url https://m3.material.io/

#   --browser-console \
exit 0

# export MOZ_ENABLE_WAYLAND=1

./firefox/firefox \
  -profile "$profile_folder" \
  -start-debugger-server 9221 \
  --remote-debugging-port 9222 \
  about:debugging#/runtime/this-firefox

# Firefox supports several remote protocols   https://firefox-source-docs.mozilla.org/remote/index.html
# -start-debugger-server  vs  --remote-debugging-port
# -start-debugger-server 9221 \
# -devtools \
# -jsconsole \
#  about:blank

# 此命令已不可用 ; Firefox 允许通过 RDP（远程调试协议）安装插件
# -install-global-extension  ${__ROOT__}/extension-v2 \
# -install-global-extension ${__DIR__}/traduzir_paginas_web-9.8.1.0.xpi \

# gecko-dev
# https://github.com/mozilla/gecko-dev.git

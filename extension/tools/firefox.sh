#!/bin/bash

set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

__ROOT__=$(
  cd ${__DIR__}/../
  pwd
)

uuid=$(cat /proc/sys/kernel/random/uuid)
profile_folder="/tmp/${uuid}"

mkdir -p $profile_folder

cd ${__DIR__}

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
cp -f prefs.js $profile_folder

./firefox/firefox \
  -profile "$profile_folder" \
  --remote-debugging-port 9221 \
  about:debugging#/runtime/this-firefox

# -start-debugger-server  vs  --remote-debugging-port
# -start-debugger-server 9221 \
# -devtools \
# -jsconsole \
#  about:blank
# 此命令已不可用
# -install-global-extension  ${__ROOT__}/extension-v2 \
# -install-global-extension ${__DIR__}/traduzir_paginas_web-9.8.1.0.xpi \

# gecko-dev
# https://github.com/mozilla/gecko-dev.git

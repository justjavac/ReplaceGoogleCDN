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

cd ${__DIR__}

OS=$(uname -s)
ARCH=$(uname -m)
echo "$OS"

export GOOGLE_API_KEY="no"
export GOOGLE_DEFAULT_CLIENT_ID="no"
export GOOGLE_DEFAULT_CLIENT_SECRET="no"

uuid=$(cat /proc/sys/kernel/random/uuid)
test -d /tmp/$uuid || mkdir -p /tmp/$uuid
dir=/tmp/$uuid

case $OS in
"Linux")
  chromium='chrome-linux/chrome'
  ;;
"Darwin")
  chromium='chrome-mac/Chromium.app/Contents/MacOS/Chromium'
  ;;

"MINGW64_NT")
  # set chrome_user_data_dir='C:\Users\%username%\Local" "Settings\Temp\chrome-user-data'
  # IF NOT EXIST %chrome_user_data_dir%  MD %chrome_user_data_dir%
  chromium='chrome-win\\chrome.exe'
  ;;
esac

echo $chromium

#扩展所在目录
extensions=${__ROOT__}

$chromium \
  --user-data-dir=$dir \
  --enable-remote-extensions \
  --enable-extensions \
  --load-extension="$extensions" \
  --enable-extensions \
  --auto-open-devtools-for-tabs \
  --enable-logging=stderr --v=1 \
  --remote-debugging-port=9222 \
  --disable-encryption --disable-machine-id \
  --start-maximized \
  about:blank

# 全屏
# --start-fullscreen
# 空白页
# about:blank

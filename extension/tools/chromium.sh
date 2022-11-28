#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

. venv/bin/activate


__ROOT__=$(
  cd ${__DIR__}/../
  pwd
)
cd ${__ROOT__}



cd ${__DIR__}

download_url=$(python3 get-latest-chromium-version-main.py)

cd ${__DIR__}
kernel_name=$(uname -s)
echo "$kernel_name"

chrome_linux=$download_url
chrome_mac=$download_url
chrome_win=$download_url

chromium=''
#扩展所在目录
extensions=${__ROOT__}
export GOOGLE_API_KEY="no"
export GOOGLE_DEFAULT_CLIENT_ID="no"
export GOOGLE_DEFAULT_CLIENT_SECRET="no"

uuid=$(cat /proc/sys/kernel/random/uuid)
test -d /tmp/$uuid || mkdir -p /tmp/$uuid
dir=/tmp/$uuid

if test "$kernel_name" = "Linux"; then
  {

    #linux
    echo 'linux'
   if [ ! -f chrome-linux.zip ]; then
      {
        curl -L -O $chrome_linux
        unzip chrome-linux.zip
      }
    fi

    chromium='chrome-linux/chrome'

  }

elif

  test "$kernel_name" = "Darwin"
then
  {
    if [ ! -f chrome-mac.zip ]; then
      {
        curl -L -O $chrome_mac
        unzip chrome-mac.zip
      }
    fi

    #扩展所在目录
    extensions=${__ROOT__}
    export GOOGLE_API_KEY="no"
    export GOOGLE_DEFAULT_CLIENT_ID="no"
    export GOOGLE_DEFAULT_CLIENT_SECRET="no"
    chromium='chrome-mac/Chromium.app/Contents/MacOS/Chromium'

  }
else
  {
    # =MINGW64_NT
    setx GOOGLE_API_KEY "no"
    setx GOOGLE_DEFAULT_CLIENT_ID "no"
    setx GOOGLE_DEFAULT_CLIENT_SECRET "no"
    echo 'no know browser'
    if [ ! -f chrome-win.zip ]; then
      curl -L -O $chrome_win
      unzip chrome-win.zip
    fi
    # set chrome_user_data_dir='C:\Users\%username%\Local" "Settings\Temp\chrome-user-data'
    # IF NOT EXIST %chrome_user_data_dir%  MD %chrome_user_data_dir%

    chromium='chrome-win\\chrome.exe'


  }
fi

echo $chromium

$chromium \
--user-data-dir=$dir \
--enable-remote-extensions \
--load-extension="$extensions" \
--enable-extensions \
--auto-open-devtools-for-tabs \
--enable-logging=stderr --v=1 \
--remote-debugging-port=9222 \
--disable-encryption --disable-machine-id \
about:blank

# 全屏
# --start-fullscreen
# 空白页
# about:blank
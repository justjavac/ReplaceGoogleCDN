#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=$(
  cd ${__DIR__}/../
  pwd
)

mkdir -p ${__PROJECT__}/var/

cd ${__PROJECT__}/var/

OS=$(uname -s)
ARCH=$(uname -m)
echo "$OS"

# 默认来源于 https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/

DOWNLOAD_CHROMIUM_URL=''

while [ $# -gt 0 ]; do
  case "$1" in
  --proxy)
    export HTTP_PROXY="$2"
    export HTTPS_PROXY="$2"
    export NO_PROXY="127.0.0.1,localhost,127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16,198.18.0.0/15,169.254.0.0/16"
    export NO_PROXY="${NO_PROXY},localhost,.npmmirror.com,.aliyuncs.com,.taobao.org,.tsinghua.edu.cn,.ustc.edu.cn,.aliyun.com"
    ;;
  --official)
    # Download Chromium
    ## https://www.chromium.org/getting-involved/download-chromium/#downloading-old-builds-of-chrome-chromium
    ## https://commondatastorage.googleapis.com/chromium-browser-snapshots/

    ## LAST_CHANGE xml format
    LASTCHANGE_URL=https://commondatastorage.googleapis.com/chromium-browser-snapshots/

    case $OS in
    "Linux")
      LASTCHANGE_URL="https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Linux_x64%2FLAST_CHANGE?alt=media"
      REVISION=$(curl -s -S $LASTCHANGE_URL)
      echo "latest revision is $REVISION"
      DOWNLOAD_CHROMIUM_URL="https://commondatastorage.googleapis.com/chromium-browser-snapshots/Linux_x64/$REVISION/chrome-linux.zip"
      ;;
    "Darwin")
      LASTCHANGE_URL="https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Mac%2FLAST_CHANGE?alt=media"
      REVISION=$(curl -s -S $LASTCHANGE_URL)
      echo "latest revision is $REVISION"
      DOWNLOAD_CHROMIUM_URL="https://commondatastorage.googleapis.com/chromium-browser-snapshots/Mac/$REVISION/chrome-mac.zip"
      ;;
    'MINGW64_NT'* | 'MSYS_NT'*)
      LASTCHANGE_URL="https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Win_x64%2FLAST_CHANGE?alt=media"
      REVISION=$(curl -s -S $LASTCHANGE_URL)
      echo "latest revision is $REVISION"
      DOWNLOAD_CHROMIUM_URL="https://commondatastorage.googleapis.com/chromium-browser-snapshots/Win_x64/$REVISION/chrome-win.zip"
      ;;
    esac
    ;;
  *)
    ;;

  esac
  shift $(($# > 0 ? 1 : 0))
done



if [ -z $DOWNLOAD_CHROMIUM_URL ] ;then
      test -d ${__PROJECT__}/var/venv || bash ${__PROJECT__}/tools/python3-env-init.sh
      . venv/bin/activate
      cd ${__DIR__}
      case $OS in
      "Linux")
        DOWNLOAD_CHROMIUM_URL=$(python3 get-latest-chromium-version-main.py linux)
        ;;
      "Darwin")
        DOWNLOAD_CHROMIUM_URL=$(python3 get-latest-chromium-version-main.py darwin)
        ;;
      *)
        DOWNLOAD_CHROMIUM_URL=$(python3 get-latest-chromium-version-main.py win)
        ;;
      esac
fi

cd ${__PROJECT__}/var/


case $OS in
"Linux")
  test -f chrome-linux.zip && rm -rf chrome-linux.zip
  test -d chrome-linux && rm -rf chrome-linux
  curl -L -O $DOWNLOAD_CHROMIUM_URL

  unzip chrome-linux.zip
  ;;
"Darwin")
  test -f chrome-mac.zip && rm -rf chrome-mac.zip
  test -d chrome-mac && rm -rf chrome-mac
  curl -L -O $DOWNLOAD_CHROMIUM_URL
  unzip chrome-mac.zip
  ;;

'MINGW64_NT'* | 'MSYS_NT'*)
  test -f chrome-win.zip && rm -rf chrome-win.zip
  test -d chrome-win && rm -rf chrome-win
  curl -L -O $DOWNLOAD_CHROMIUM_URL
  unzip chrome-win.zip
  ;;
*)
  echo 'no match OS'
  exit 0
  ;;

esac

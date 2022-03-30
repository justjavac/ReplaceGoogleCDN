#!/bin/bash

set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

kernel_name=$(uname -s)
echo "$kernel_name"

get_latest_version()
{
  export http_proxy=http://127.0.0.1:8015
  export https_proxy=http://127.0.0.1:8015

  # Download Chromium
  ## https://www.chromium.org/getting-involved/download-chromium/#downloading-old-builds-of-chrome-chromium
  ## https://commondatastorage.googleapis.com/chromium-browser-snapshots/

  ## LAST_CHANGE xml format
  LASTCHANGE_URL=https://commondatastorage.googleapis.com/chromium-browser-snapshots/
  LASTCHANGE_URL="https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Linux_x64%2FLAST_CHANGE?alt=media"

  REVISION=$(curl -s -S $LASTCHANGE_URL)

  echo "latest revision is $REVISION"

  if [ -d $REVISION ] ; then
    echo "already have latest version"
    # exit
  fi
  unset http_proxy;
  unset https_proxy;
}



# 最新版本
chrome_linux="https://download-chromium.appspot.com/dl/Linux_x64?type=snapshots"
chrome_mac="https://download-chromium.appspot.com/dl/Mac?type=snapshots"
chrome_win="https://download-chromium.appspot.com/dl/Win_x64?type=snapshots"

REVISION=985270
# 最新版本 ok
chrome_linux="https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Linux_x64%2F$REVISION%2Fchrome-linux.zip?alt=media"
chrome_mac="https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Mac%2F$REVISION%2Fchrome-mac.zip?alt=media"
chrome_win="https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Win_x64%2F$REVISION%2Fchrome-win.zip?alt=media"



# taobao chromium mirror 并不实时同步，落后一些时间，最新版本落后一些时间
chrome_linux="https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/Linux_x64/$REVISION/chrome-linux.zip"
chrome_mac="https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/Mac/$REVISION/chrome-mac.zip"
chrome_win="https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/Win_x64/$REVISION/chrome-win.zip"


if test "$kernel_name" = "Linux"; then
  {
    #linux
    echo 'linux'
    if [ ! -f chrome-linux.zip ]
    then
     {
            curl -L -O $chrome_linux
            unzip chrome-linux.zip
     }
     fi
     stat chrome-linux.zip

  }
elif test "$kernel_name" = "Darwin"; then
  {
      if [ ! -f chrome-mac.zip ]
      then
       {
              curl -L -O $chrome_mac
              unzip chrome-mac.zip
       }
       fi

  }
else
  {
     # =MINGW64_NT
      if [ ! -f chrome-win.zip ]
      then
            curl -L -O  $chrome_win
            unzip chrome-win.zip
      fi
  }
fi

#!/bin/bash

set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

kernel_name=$(uname -s)
echo "$kernel_name"

:<<EOF
  下载chromium 浏览器


EOF


chrome_linux="https://download-chromium.appspot.com/dl/Linux_x64?type=snapshots"
chrome_mac="https://download-chromium.appspot.com/dl/Mac?type=snapshots"
chrome_win="https://download-chromium.appspot.com/dl/Win_x64?type=snapshots"


get_latest_version_use_proxy()
{
  export http_proxy=http://127.0.0.1:8016
  export https_proxy=http://127.0.0.1:8016

  # Download Chromium
  ## https://www.chromium.org/getting-involved/download-chromium/#downloading-old-builds-of-chrome-chromium
  ## https://commondatastorage.googleapis.com/chromium-browser-snapshots/

  ## LAST_CHANGE xml format
  LASTCHANGE_URL=https://commondatastorage.googleapis.com/chromium-browser-snapshots/
  LASTCHANGE_URL="https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Linux_x64%2FLAST_CHANGE?alt=media"

  REVISION=$(curl -s -S $LASTCHANGE_URL)

  echo "latest revision is $REVISION"


    chrome_linux="https://commondatastorage.googleapis.com/chromium-browser-snapshots/Linux_x64/$REVISION/chrome-linux.zip"
    chrome_mac="https://commondatastorage.googleapis.com/chromium-browser-snapshots/Mac/$REVISION/chrome-mac.zip"
    chrome_win="https://commondatastorage.googleapis.com/chromium-browser-snapshots/Win_x64/$REVISION/chrome-win.zip"

    #clean old 版本
    test -f chrome-linux.zip &&  rm -f chrome-linux.zip
    test -d chrome-linux     &&  rm -rf chrome-linux
    test -f chrome-mac.zip   &&  rm -f chrome-mac.zip
    test -d chrome-mac       &&  rm -rf chrome-mac
    test -f chrome-win.zip   &&  rm -f chrome-win.zip
    test -d chrome-win       &&  rm -rf chrome-win
    echo $?
}



get_version()
{
  # 最新版本
   REVISION=985270

  # taobao chromium mirror 并不实时同步，落后一些时间，最新版本落后一些时间
  chrome_linux="https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/Linux_x64/$REVISION/chrome-linux.zip"
  chrome_mac="https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/Mac/$REVISION/chrome-mac.zip"
  chrome_win="https://registry.npmmirror.com/-/binary/chromium-browser-snapshots/Win_x64/$REVISION/chrome-win.zip"
}



download()
{

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
     #  请使用git bash 执行
     # =MINGW64_NT
      if [ ! -f chrome-win.zip ]
      then
            curl -L -O  $chrome_win
            unzip chrome-win.zip
      fi
  }
fi
echo $?
unset http_proxy;
unset https_proxy;
}
set +u
force_download_flag=$1;
set -u
if  [[ -n $force_download_flag  ]] && [[ $1 -eq  1 ]]
then
{
   get_latest_version_use_proxy
} else {
  get_version
}
fi

echo $chrome_linux
download
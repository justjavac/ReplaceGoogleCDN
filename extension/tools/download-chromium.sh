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

DOWNLOAD_CHROMIUM_URL=$(python3 get-latest-chromium-version-main.py)

cd ${__DIR__}

OS=$(uname -s)
ARCH=$(uname -m)
echo "$OS"

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

"MINGW64_NT")
  test -f chrome-win.zip && rm -rf chrome-win.zip
  test -d chrome-win && rm -rf chrome-win
  curl -L -O $DOWNLOAD_CHROMIUM_URL
  unzip chrome-win.zip
  ;;
esac

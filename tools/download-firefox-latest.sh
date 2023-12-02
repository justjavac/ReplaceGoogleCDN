#!/bin/bash

set -ex
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

# http://download.cdn.mozilla.net/pub/firefox/releases/latest/README.txt
# https://download.mozilla.org/?product=firefox-latest&os=win&lang=en-US

#wget -O FirefoxSetup.exe "https://download.mozilla.org/?product=firefox-latest&os=win&lang=en-US"

OS=$(uname -s)
ARCH=$(uname -m)
echo "${OS}_${ARCH}"


case $OS in
"Linux")
  wget -O firefox.tar.bz2 "https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US"
  tar -jxvf firefox.tar.bz2
  ;;
"Darwin")
  wget -O firefox.dmg "https://download.mozilla.org/?product=firefox-latest&os=osx&lang=en-US"
  # 使用 hdiutil 挂载 DMG格式 文件
  UUID=$(uuidgen)
  TMP_MOUNT_POINT=/tmp/${UUID}
  mkdir -p ${TMP_MOUNT_POINT}
  hdiutil attach -mountpoint ${TMP_MOUNT_POINT} firefox.dmg

  # 将应用程序拷贝到指定目录
  mkdir -p ${__PROJECT__}/var/Firefox
  cp -rf /private/${TMP_MOUNT_POINT}/Firefox.app  ${__PROJECT__}/var/Firefox
  ls -lh ${__PROJECT__}/var/Firefox/

  ;;

'MINGW64_NT'* | 'MSYS_NT'*)
  wget -O firefox.exe "https://download.mozilla.org/?product=firefox-latest&os=win64&lang=en-US"
  ;;
esac




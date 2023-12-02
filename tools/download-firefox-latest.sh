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

while [ $# -gt 0 ]; do
  case "$1" in
  --proxy)
      export HTTP_PROXY="$2"
      export HTTPS_PROXY="$2"
      export NO_PROXY="127.0.0.1,localhost,127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16,198.18.0.0/15,169.254.0.0/16"
      export NO_PROXY="${NO_PROXY},localhost,.npmmirror.com,.aliyuncs.com,.taobao.org,.tsinghua.edu.cn,.ustc.edu.cn,.aliyun.com"
    ;;
  *)
    ;;
  esac
  shift $(($# > 0 ? 1 : 0))
done

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
  curl -Lo firefox.tar.bz2 "https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US"
  tar -jxvf firefox.tar.bz2
  ;;
"Darwin")
  curl -Lo firefox.dmg "https://download.mozilla.org/?product=firefox-latest&os=osx&lang=en-US"
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
  curl -Lo firefox.exe "https://download.mozilla.org/?product=firefox-latest&os=win64&lang=en-US"
  ;;
esac




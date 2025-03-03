#!/usr/bin/env bash

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
    NO_PROXY="127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16"
    NO_PROXY="${NO_PROXY},::1/128,fe80::/10,fd00::/8,ff00::/8"
    export NO_PROXY="${NO_PROXY},localhost,.npmmirror.com"
    ;;
  *) ;;

  esac
  shift $(($# > 0 ? 1 : 0))
done

mkdir -p ${__PROJECT__}/var/

cd ${__PROJECT__}/var/

# download firefox
# https://www.mozilla.org/en-US/firefox/all/#product-desktop-release

# show download firefox
# https://archive.mozilla.org/pub/firefox/releases/

# firefox manifest-v3-migration-guide
# https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/

# https://blog.mozilla.org/addons/2022/11/17/manifest-v3-signing-available-november-21-on-firefox-nightly/

# MV3 扩展在 Firefox 109（2023 年 1 月 17 日）的全面发布中发布
#  https://www.mozilla.org/en-US/firefox/109.0/releasenotes/

# firefox 114 支持 DNS over HTTPS ；WebTransport默认启用
# https://www.mozilla.org/en-US/firefox/113.0/releasenotes/

OS=$(uname -s)
ARCH=$(uname -m)
echo "${OS}_${ARCH}"

FIREFOX_VERSION=136.0b9

if [ -n "$1" ]; then
  FIREFOX_VERSION="$1"
fi

SHOW_DOWNLOAD_FIREFOX_URL=https://archive.mozilla.org/pub/firefox/releases/

DOWNLOAD_FIREFOX_URL_PREFIX=https://archive.mozilla.org/pub/firefox/releases

case $OS in
"Linux")
  test -f firefox.tar.xz && rm -rf firefox.tar.xz
  test -d firefox && rm -rf firefox
  DOWNLOAD_FIREFOX_URL=${DOWNLOAD_FIREFOX_URL_PREFIX}/${FIREFOX_VERSION}/linux-${ARCH}/en-US/firefox-${FIREFOX_VERSION}.tar.xz
  curl -Lo firefox.tar.xz ${DOWNLOAD_FIREFOX_URL}
  xz -d firefox.tar.xz
  tar -xvf firefox.tar
  ;;
"Darwin")
  FIREFOX_DMG_FILE=firefox.dmg
  test -f ${FIREFOX_DMG_FILE} && rm -rf ${FIREFOX_DMG_FILE}
  DOWNLOAD_FIREFOX_URL=${DOWNLOAD_FIREFOX_URL_PREFIX}/${FIREFOX_VERSION}/mac/en-US/Firefox%20${FIREFOX_VERSION}.dmg
  curl -Lo ${FIREFOX_DMG_FILE} ${DOWNLOAD_FIREFOX_URL}

  # brew install p7zip
  # 使用 7-zip 解压
  # 7z x ${FIREFOX_DMG_FILE}
  # chmod a+x ${__PROJECT__}/var/Firefox/Firefox.app/Contents/MacOS/firefox

  # 使用 hdiutil 挂载 DMG格式 文件
  UUID=$(uuidgen)
  TMP_MOUNT_POINT=/tmp/${UUID}
  mkdir -p ${TMP_MOUNT_POINT}
  hdiutil attach -mountpoint ${TMP_MOUNT_POINT} ${FIREFOX_DMG_FILE}
  # hdiutil attach Firefox%20${FIREFOX_VERSION}.dmg

  # 将应用程序拷贝到指定目录
  mkdir -p ${__PROJECT__}/var/firefox
  cp -rf /private/${TMP_MOUNT_POINT}/Firefox.app ${__PROJECT__}/var/firefox
  ls -lh ${__PROJECT__}/var/firefox/

  ;;

'MINGW64_NT'* | 'MSYS_NT'*)
  test -f firefox.exe && rm -rf firefox.exe
  DOWNLOAD_FIREFOX_URL=${DOWNLOAD_FIREFOX_URL_PREFIX}/${FIREFOX_VERSION}/win64/en-US/Firefox%20Setup%20${FIREFOX_VERSION}.exe
  curl -Lo firefox.exe ${DOWNLOAD_FIREFOX_URL}
  ;;
esac

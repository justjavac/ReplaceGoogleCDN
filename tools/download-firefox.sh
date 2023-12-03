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

FIREFOX_VERSION=121.0b6

if [ -n "$1" ]; then
  FIREFOX_VERSION="$1"
fi

SHOW_DOWNLOAD_FIREFOX_URL=https://archive.mozilla.org/pub/firefox/releases/

DOWNLOAD_FIREFOX_URL_PREFIX=https://archive.mozilla.org/pub/firefox/releases

case $OS in
"Linux")
  test -f firefox-${FIREFOX_VERSION}.tar.bz2 && rm -rf firefox-${FIREFOX_VERSION}.tar.bz2
  test -d firefox && rm -rf firefox
  DOWNLOAD_FIREFOX_URL=${DOWNLOAD_FIREFOX_URL_PREFIX}/${FIREFOX_VERSION}/linux-${ARCH}/en-US/firefox-${FIREFOX_VERSION}.tar.bz2
  curl -Lo firefox-${FIREFOX_VERSION}.tar.bz2 ${DOWNLOAD_FIREFOX_URL}
  tar -jxvf firefox-${FIREFOX_VERSION}.tar.bz2
  ;;
"Darwin")
  FIREFOX_DMG_FILE=Firefox%20${FIREFOX_VERSION}.dmg
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
  mkdir -p ${__PROJECT__}/var/Firefox
  cp -rf /private/${TMP_MOUNT_POINT}/Firefox.app  ${__PROJECT__}/var/Firefox
  ls -lh ${__PROJECT__}/var/Firefox/

  ;;

'MINGW64_NT'* | 'MSYS_NT'*)
  test -f Firefox%20Setup%20${FIREFOX_VERSION}.msi && rm -rf Firefox%20Setup%20${FIREFOX_VERSION}.msi
  DOWNLOAD_FIREFOX_URL=${DOWNLOAD_FIREFOX_URL_PREFIX}/${FIREFOX_VERSION}/win64/en-US/Firefox%20Setup%20${FIREFOX_VERSION}.msi
  curl -Lo Firefox%20Setup%20${FIREFOX_VERSION}.msi ${DOWNLOAD_FIREFOX_URL}
  ;;
esac




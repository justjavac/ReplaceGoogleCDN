#!/bin/bash

set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

# download firefox
# https://www.mozilla.org/en-US/firefox/all/#product-desktop-release

# downloaf firefox
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

FIREFOX_VERSION=114.0b9

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
  test -f Firefox%20${FIREFOX_VERSION}.dmg && rm -rf Firefox%20${FIREFOX_VERSION}.dmg
  DOWNLOAD_FIREFOX_URL=${DOWNLOAD_FIREFOX_URL_PREFIX}/${FIREFOX_VERSION}/mac/en-US/Firefox%20${FIREFOX_VERSION}.dmg
  curl -Lo Firefox%20${FIREFOX_VERSION}.dmg ${DOWNLOAD_FIREFOX_URL}

  ;;

"MINGW64_NT")
  test -f Firefox%20Setup%20${FIREFOX_VERSION}.msi && rm -rf Firefox%20Setup%20${FIREFOX_VERSION}.msi
  DOWNLOAD_FIREFOX_URL=${DOWNLOAD_FIREFOX_URL_PREFIX}/${FIREFOX_VERSION}/win64/en-US/Firefox%20Setup%20${FIREFOX_VERSION}.msi
  curl -Lo Firefox%20Setup%20${FIREFOX_VERSION}.msi ${DOWNLOAD_FIREFOX_URL}
  ;;
esac

#!/bin/bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
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

# linux firefox 版本
VERSION=115.0esr

curl -Lo firefox-${VERSION}.tar.bz2 https://archive.mozilla.org/pub/firefox/releases/${VERSION}/linux-x86_64/en-US/firefox-${VERSION}.tar.bz2
tar -jxvf firefox-${VERSION}.tar.bz2
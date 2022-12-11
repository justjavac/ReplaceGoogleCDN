#!/bin/bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

# download firefox
# https://www.mozilla.org/en-US/firefox/all/#product-desktop-release

# downloaf firefox
# https://archive.mozilla.org/pub/firefox/releases/


curl -Lo firefox-108.tar.bz2 https://archive.mozilla.org/pub/firefox/releases/108.0b9/linux-x86_64/en-US/firefox-108.0b9.tar.bz2
tar -jxvf firefox-108.tar.bz2
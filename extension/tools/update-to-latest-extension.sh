#!/bin/bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

# 下载扩展

mkdir -p temp
cd ${__DIR__}/temp

test -f ReplaceGoogleCDN-v3.zip && rm -rf ReplaceGoogleCDN-v3.zip
curl -LO https://www.jingjingxyk.com/chromium-extension/ReplaceGoogleCDN-v3.zip

test -d ReplaceGoogleCDN-v3 && rm -rf ReplaceGoogleCDN-v3
unzip -d ReplaceGoogleCDN-v3 ReplaceGoogleCDN-v3.zip

#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

test -d dist && rm -rf dist
mkdir -p dist/
cd ${__DIR__}/dist

test -f ReplaceGoogleCDN-v2.zip && rm -f ReplaceGoogleCDN-v2.zip

# 打包 manifest v2  支持chromium 内核系列 和 firefox
cd ${__DIR__}/extension-v2/

zip -r ../dist/ReplaceGoogleCDN-v2.zip . \
  -x ".git/*" \
  -x ".idea/*" \
  -x "_metadata/*" \
  -x "node_modules/*" \
  -x "tools/*" \
  -x "js/background-advance.js" \
  -x "js/background-default.js" \
  -x "./README.md" \
  -x "./test/*"

cd ${__DIR__}
zip -u dist/ReplaceGoogleCDN-v2.zip ./README.md
zip -u dist/ReplaceGoogleCDN-v2.zip ./Privacy.md
zip -u dist/ReplaceGoogleCDN-v2.zip ./LICENSE
zip -u dist/ReplaceGoogleCDN-v2.zip ./CHANGELOG-v2-x.x.x.md

cd ${__DIR__}/dist
# 查看打包结果
unzip ReplaceGoogleCDN-v2.zip -d ReplaceGoogleCDN-v2

cd ${__DIR__}

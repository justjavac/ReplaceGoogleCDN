#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

mkdir -p dist/
cd ${__DIR__}/dist

test -f ReplaceGoogleCDN-v2.zip && rm -f ReplaceGoogleCDN-v2.zip
test -f ReplaceGoogleCDN-v3.zip && rm -f ReplaceGoogleCDN-v3.zip

cd ${__DIR__}/extension

# 打包 manifest v3 支持chromium 内核系列
zip -r ../dist/ReplaceGoogleCDN-v3.zip . \
  -x ".git/*" \
  -x ".idea/*" \
  -x "_metadata/*" \
  -x "node_modules/*" \
  -x "tools/*" \
  -x "_metadata/*" \
  -x "rules/advance-no-use/*" \
  -x "rules/example-no-use/backup/*" \
  -x "screenshot/*" \
  -x "test/*" \
  -x "web/*" \
  -x "web-backup/*" \
  -x "manifest-backup.json" \
  -x "third_party/highlightjs/*" \
  -x "third_party/webrtc/*"

cd ${__DIR__}
zip -u dist/ReplaceGoogleCDN-v3.zip ./README.md
zip -u dist/ReplaceGoogleCDN-v3.zip ./Privacy.md
zip -u dist/ReplaceGoogleCDN-v3.zip ./LICENSE
zip -u dist/ReplaceGoogleCDN-v3.zip ./CHANGELOG-v3-x.x.x.md

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

test -d ReplaceGoogleCDN-v2 && rm -rf ReplaceGoogleCDN-v2
test -d ReplaceGoogleCDN-v3 && rm -rf ReplaceGoogleCDN-v3

unzip ReplaceGoogleCDN-v2.zip -d ReplaceGoogleCDN-v2
unzip ReplaceGoogleCDN-v3.zip -d ReplaceGoogleCDN-v3

cd ${__DIR__}

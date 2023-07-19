#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

mkdir -p dist/
cd ${__DIR__}/dist

test -f ReplaceGoogleCDN-v3-chromium.zip && rm -f ReplaceGoogleCDN-v3-chromium.zip
test -f ReplaceGoogleCDN-v3-firefox.zip && rm -f ReplaceGoogleCDN-v3-firefox.zip

cd ${__DIR__}/
python3 extension/tools/update-manifest.py chromium

cd ${__DIR__}/extension
# 打包 manifest v3 支持chromium 内核系列
zip -r ../dist/ReplaceGoogleCDN-v3-chromium.zip . \
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

cd ${__DIR__}/
zip -u dist/ReplaceGoogleCDN-v3-chromium.zip ./README.md
zip -u dist/ReplaceGoogleCDN-v3-chromium.zip ./Privacy.md
zip -u dist/ReplaceGoogleCDN-v3-chromium.zip ./LICENSE
zip -u dist/ReplaceGoogleCDN-v3-chromium.zip ./CHANGELOG-v3-x.x.x.md

cd ${__DIR__}/
python3 extension/tools/update-manifest.py firefox

cd ${__DIR__}/extension
zip -r ../dist/ReplaceGoogleCDN-v3-firefox.zip . \
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
zip -u dist/ReplaceGoogleCDN-v3-firefox.zip ./README.md
zip -u dist/ReplaceGoogleCDN-v3-firefox.zip ./Privacy.md
zip -u dist/ReplaceGoogleCDN-v3-firefox.zip ./LICENSE
zip -u dist/ReplaceGoogleCDN-v3-firefox.zip ./CHANGELOG-v3-x.x.x.md

#  恢复为默认
cd ${__DIR__}/
python3 extension/tools/update-manifest.py chromium

cd ${__DIR__}/dist
# 查看打包结果
# 兼容上一版本
cp -f ReplaceGoogleCDN-v3-chromium.zip ReplaceGoogleCDN-v3.zip

unzip ReplaceGoogleCDN-v3-chromium.zip -d ReplaceGoogleCDN-v3-chromium
unzip ReplaceGoogleCDN-v3-firefox.zip -d ReplaceGoogleCDN-v3-firefox
unzip ReplaceGoogleCDN-v3.zip -d ReplaceGoogleCDN-v3

cd ${__DIR__}

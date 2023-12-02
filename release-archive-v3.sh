#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

mkdir -p ${__DIR__}/var/
test -d ${__DIR__}/dist/ && rm -rf ${__DIR__}/dist/
mkdir -p ${__DIR__}/dist/



## 打包 chromium 扩展

test -f ${__DIR__}/dist/ReplaceGoogleCDN-v3-chromium.zip && rm -f ${__DIR__}/dist/ReplaceGoogleCDN-v3-chromium.zip

cd ${__DIR__}/

test -d ${__DIR__}/extension/_metadata && rm -rf ${__DIR__}/extension/_metadata

cd ${__DIR__}/extension
# 打包 manifest v3 支持chromium 内核系列
zip -r ${__DIR__}/dist/ReplaceGoogleCDN-v3-chromium.zip . \
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


zip -u ${__DIR__}/dist/ReplaceGoogleCDN-v3-chromium.zip ./README.md
zip -u ${__DIR__}/dist/ReplaceGoogleCDN-v3-chromium.zip ./Privacy.md
zip -u ${__DIR__}/dist/ReplaceGoogleCDN-v3-chromium.zip ./LICENSE


cd ${__DIR__}/


## 打包 firefox 扩展

test -f ${__DIR__}/dist/ReplaceGoogleCDN-v3-firefox.zip && rm -f ${__DIR__}/dist/ReplaceGoogleCDN-v3-firefox.zip

mkdir -p ${__DIR__}/var/extension-tmp/rules/

cp -rf ${__DIR__}/extension/rules/*.json  ${__DIR__}/var/extension-tmp/rules/
cp -rf ${__DIR__}/extension/manifest.json  ${__DIR__}/var/extension-tmp/
cp -rf ${__DIR__}/extension/icons  ${__DIR__}/var/extension-tmp/

rm -f ${__DIR__}/var/extension-tmp/rules/rules_remove_content_security_policy_header_test.json
rm -f ${__DIR__}/var/extension-tmp/rules/rules-default-domains-helper.json

python3 tools/update-v3-manifest.py firefox



cd ${__DIR__}/var/extension-tmp/
zip -r ${__DIR__}/dist/ReplaceGoogleCDN-v3-firefox.zip .

cd ${__DIR__}/

zip -u ${__DIR__}/dist/ReplaceGoogleCDN-v3-firefox.zip ./README.md
zip -u ${__DIR__}/dist/ReplaceGoogleCDN-v3-firefox.zip ./Privacy.md
zip -u ${__DIR__}/dist/ReplaceGoogleCDN-v3-firefox.zip ./LICENSE


cd ${__DIR__}/
cd ${__DIR__}/dist
# 查看打包结果

test -d ReplaceGoogleCDN-v3-chromium && rm -rf ReplaceGoogleCDN-v3-chromium
test -d ReplaceGoogleCDN-v3-firefox && rm -rf ReplaceGoogleCDN-v3-firefox

unzip ReplaceGoogleCDN-v3-chromium.zip -d ReplaceGoogleCDN-v3-chromium
unzip ReplaceGoogleCDN-v3-firefox.zip -d ReplaceGoogleCDN-v3-firefox

cd ${__DIR__}

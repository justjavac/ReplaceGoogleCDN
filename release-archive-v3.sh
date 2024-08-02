#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=${__DIR__}

cd ${__PROJECT__}

mkdir -p ${__PROJECT__}/var/
mkdir -p ${__PROJECT__}/dist/v3/



## 打包 chromium 扩展

test -f ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-chromium.zip && rm -f ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-chromium.zip

cd ${__PROJECT__}

test -d ${__PROJECT__}/extension/_metadata && rm -rf ${__PROJECT__}/extension/_metadata

cd ${__PROJECT__}/extension
# 打包 manifest v3 支持chromium 内核系列
zip -r ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-chromium.zip . \
  -x ".git/*" \
  -x ".idea/*" \
  -x "_metadata/*" \
  -x "node_modules/*" \
  -x "tools/*" \
  -x "_metadata/*" \
  -x "rules/example-advance/*" \
  -x "rules/example/*" \
  -x "background-page.html" \
  -x "screenshot/*" \
  -x "test/*" \
  -x "web/*" \
  -x "web-backup/*" \
  -x "manifest-backup.json" \
  -x "third_party/highlightjs/*" \
  -x "third_party/webrtc/*"

cd ${__PROJECT__}


zip -u ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-chromium.zip ./README.md
zip -u ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-chromium.zip ./Privacy.md
zip -u ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-chromium.zip ./LICENSE




## 打包 firefox 扩展

test -f ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-firefox.zip && rm -f ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-firefox.zip

test -d ${__PROJECT__}/var/extension-tmp/ && rm -rf ${__PROJECT__}/var/extension-tmp/

mkdir -p ${__PROJECT__}/var/extension-tmp/rules/

cp -rf ${__PROJECT__}/extension/rules/*.json  ${__PROJECT__}/var/extension-tmp/rules/
cp -rf ${__PROJECT__}/extension/icons  ${__PROJECT__}/var/extension-tmp/
cp -rf ${__PROJECT__}/extension/background-page.html  ${__PROJECT__}/var/extension-tmp/
cp -rf ${__PROJECT__}/extension/js/  ${__PROJECT__}/var/extension-tmp/js/



rm -f ${__PROJECT__}/var/extension-tmp/rules/rules_remove_content_security_policy_header_test.json
rm -f ${__PROJECT__}/var/extension-tmp/rules/rules-default-domains-helper.json

python3 tools/update-v3-manifest.py firefox



cd ${__PROJECT__}/var/extension-tmp/
zip -r ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-firefox.zip .

cd ${__PROJECT__}/

zip -u ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-firefox.zip ./README.md
zip -u ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-firefox.zip ./Privacy.md
zip -u ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-firefox.zip ./LICENSE



# 查看打包结果
cd ${__PROJECT__}/dist/v3/

test -d ReplaceGoogleCDN-chromium && rm -rf ReplaceGoogleCDN-chromium
test -d ReplaceGoogleCDN-firefox && rm -rf ReplaceGoogleCDN-firefox

unzip ReplaceGoogleCDN-chromium.zip -d ReplaceGoogleCDN-chromium
unzip ReplaceGoogleCDN-firefox.zip -d ReplaceGoogleCDN-firefox

cd ${__PROJECT__}


# 为了兼容 上一版的打包结果
cp -f ${__PROJECT__}/dist/v3/ReplaceGoogleCDN-chromium.zip ${__PROJECT__}/dist/ReplaceGoogleCDN-v3.zip

cd ${__PROJECT__}/dist/
test -d ReplaceGoogleCDN-v3 && rm -rf ReplaceGoogleCDN-v3
unzip ReplaceGoogleCDN-v3.zip -d ReplaceGoogleCDN-v3

#!/usr/bin/env bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=${__DIR__}
cd ${__PROJECT__}

mkdir -p ${__PROJECT__}/var/
mkdir -p ${__PROJECT__}/dist/v2/

test -f ${__PROJECT__}/dist/v2/ReplaceGoogleCDN.zip && rm -f ${__PROJECT__}/dist/v2/ReplaceGoogleCDN.zip

# 打包 manifest v2  支持chromium 内核系列 和 firefox
cd ${__PROJECT__}/extension-v2/

zip -r ${__PROJECT__}/dist/v2/ReplaceGoogleCDN.zip . \
  -x ".git/*" \
  -x ".idea/*" \
  -x "_metadata/*" \
  -x "node_modules/*" \
  -x "tools/*" \
  -x "js/background-advance.js" \
  -x "js/background-default.js" \
  -x "./README.md" \
  -x "./test/*"

cd ${__PROJECT__}
zip -u dist/v2/ReplaceGoogleCDN.zip ./README.md
zip -u dist/v2/ReplaceGoogleCDN.zip ./Privacy.md
zip -u dist/v2/ReplaceGoogleCDN.zip ./LICENSE

cd ${__PROJECT__}/dist/v2/
# 查看打包结果

test -d ReplaceGoogleCDN && rm -rf ReplaceGoogleCDN

unzip ReplaceGoogleCDN.zip -d ReplaceGoogleCDN

cd ${__PROJECT__}




# 为了兼容 上一版的打包结果
cp -f ${__PROJECT__}/dist/v2/ReplaceGoogleCDN.zip ${__PROJECT__}/dist/ReplaceGoogleCDN-v2.zip

cd ${__PROJECT__}/dist/
test -d ReplaceGoogleCDN-v2 && rm -rf ReplaceGoogleCDN-v2
unzip ReplaceGoogleCDN-v2.zip -d ReplaceGoogleCDN-v2

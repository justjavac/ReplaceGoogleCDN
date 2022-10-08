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

test -f extension-v2.zip && rm -f extension-v2.zip
test -f extension-v3.zip && rm -f extension-v3.zip

cd ${__DIR__}/extension

# 打包 manifest v3 支持chromium 内核系列
zip -r ../dist/extension-v3.zip . \
  -x "tools/*" \
  -x "_metadata/*" \
  -x "rules/advance-no-use/*" \
  -x "rules/example-no-use/*" \
  -x "rules/README.md" \
  -x "screenshot/*" \
  -x "test/*" \
  -x "web/*" \
  -x "web-backup/*" \
  -x "manifest-backup.json" \
  -x "third_party/highlightjs/*" \
  -x "third_party/josdejong/*" \
  -x "third_party/webrtc/*"

cd ${__DIR__}
zip -u dist/extension-v3.zip ./README.md
zip -u dist/extension-v3.zip ./Privacy.md
zip -u dist/extension-v3.zip ./LICENSE

# 打包 manifest v2  支持chromium 内核系列 和 firefox
cd ${__DIR__}/extension-v2/

zip -r ../dist/extension-v2.zip . \
  -x "./README.md"

cd ${__DIR__}
zip -u dist/extension-v2.zip ./README.md
zip -u dist/extension-v2.zip ./Privacy.md
zip -u dist/extension-v2.zip ./LICENSE

cd ${__DIR__}/dist
# 查看打包结果
unzip extension-v2.zip -d extension-v2
unzip extension-v3.zip -d extension-v3

cd ${__DIR__}

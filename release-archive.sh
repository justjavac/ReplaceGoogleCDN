#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

test -d dist  && rm -rf dist
mkdir -p dist

test -f  dist/extension-v2.zip  && rm -f  dist/extension-v2.zip
test -f  dist/extension-v3.zip  && rm -f  dist/extension-v3.zip

# 打包 manifest v3
cd ${__DIR__}/extension/

zip -r ../dist/extension-v3.zip . \
  -x "./tools/*" \
  -x "./_metadata/*" \
  -x "./test/*" \
  -x "./dist/*" \
  -x "./.git/*" \
  -x "./.idea/*"



cd ${__DIR__}


# 打包 manifest v2
cd ${__DIR__}/extension-v2/

zip -r ../dist/extension-v2.zip . \
  -x "./README.md"


cd ${__DIR__}
cd dist
unzip extension-v2.zip -d extension-v2
unzip extension-v3.zip -d extension-v3

cd ${__DIR__}
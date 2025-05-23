#!/usr/bin/env bash
set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=$(
  cd "${__DIR__}/../"
  pwd
)
cd ${__PROJECT__}

if [ ! "$BASH_VERSION" ]; then
  echo "Please do not use sh to run this script ($0), just execute it directly" 1>&2
  exit 1
fi

# 使用代理下载源码
# bash  upgrade-thirdparty-library.sh --proxy http://127.0.0.1:1080

while [ $# -gt 0 ]; do
  case "$1" in
  --proxy)
    export HTTP_PROXY="$2"
    export HTTPS_PROXY="$2"
    NO_PROXY="127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16"
    NO_PROXY="${NO_PROXY},::1/128,fe80::/10,fd00::/8,ff00::/8"
    export NO_PROXY="${NO_PROXY},localhost,.npmmirror.com"
    ;;
  *) ;;

  esac
  shift $(($# > 0 ? 1 : 0))
done

mkdir -p ${__PROJECT__}/var/tmp/
cd ${__PROJECT__}/var/tmp/

VENDOR=${__PROJECT__}/extension/third_party/

test -d frontend-utils/.git || git clone -b main https://github.com/jingjingxyk/frontend-utils.git --depth=1 --progress

mkdir -p ${VENDOR}/jingjingxyk/frontend-utils
cp -f frontend-utils/utils.js ${VENDOR}/jingjingxyk/frontend-utils/utils.js

cd ${__PROJECT__}/var/tmp/
JSON_VERSION=v3.3.1
test -d svelte-jsoneditor/.git || git clone -b ${JSON_VERSION} https://github.com/josdejong/svelte-jsoneditor.git --depth=1 --progress

cd svelte-jsoneditor
export PATH=${__PROJECT__}/runtime/node/bin:$PATH
npm install
npm run build

rm -rf ${VENDOR}/josdejong/svelte-jsoneditor/
mkdir -p ${VENDOR}/josdejong/svelte-jsoneditor/main

cp -rf package-vanilla/* ${VENDOR}/josdejong/svelte-jsoneditor/main

# 移除不需要 .ts 文件
cd ${VENDOR}/josdejong/svelte-jsoneditor/main
ls -h *.ts | xargs -I {} rm -f  {}
cd ${VENDOR}/josdejong/svelte-jsoneditor/main/themes
ls -h *.scss | xargs -I {} rm -f  {}

cd ${__PROJECT__}/var/tmp/

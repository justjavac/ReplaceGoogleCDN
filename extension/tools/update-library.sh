#!/bin/bash
set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

if [ ! "$BASH_VERSION" ]; then
  echo "Please do not use sh to run this script ($0), just execute it directly" 1>&2
  exit 1
fi

# test -d temp && rm -rf temp

# example use proxy download source code
# 使用代理下载源码
# bash  update-library.sh --proxy http://127.0.0.1:1080

mirror=''
while [ $# -gt 0 ]; do
  case "$1" in
  --proxy)
    export HTTP_PROXY="$2"
    export HTTPS_PROXY="$2"
    export NO_PROXY="127.0.0.1,localhost,127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16,198.18.0.0/15,169.254.0.0/16"
    export NO_PROXY="${NO_PROXY},localhost,.npmmirror.com,.aliyuncs.com,.taobao.org,.tsinghua.edu.cn,.ustc.edu.cn,.aliyun.com"
    shift
    ;;
  *) ;;

  esac
  shift $(($# > 0 ? 1 : 0))
done

mkdir -p temp
cd ${__DIR__}/temp

VENDOR=${__DIR__}/../third_party/

test -d frontend-utils/.git || git clone -b main https://github.com/jingjingxyk/frontend-utils.git --depth=1 --progress

mkdir -p ${VENDOR}/jingjingxyk/frontend-utils
cp -f frontend-utils/utils.js ${VENDOR}/jingjingxyk/frontend-utils/utils.js

cd ${__DIR__}/temp
JSON_VERSION=v0.17.8
test -d svelte-jsoneditor/.git || git clone -b ${JSON_VERSION} https://github.com/josdejong/svelte-jsoneditor.git --depth=1 --progress

cd svelte-jsoneditor
npm install
npm run build

rm -rf ${VENDOR}/josdejong/svelte-jsoneditor/
mkdir -p ${VENDOR}/josdejong/svelte-jsoneditor/main

cp -rf package-vanilla/* ${VENDOR}/josdejong/svelte-jsoneditor/main

cd ${__DIR__}/

test -d temp && rm -rf temp

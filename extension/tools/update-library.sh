#!/bin/bash
set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

if [ ! "$BASH_VERSION" ]; then
  echo "Please do not use sh to run this script ($0), just execute it directly" 1>&2
  exit 1
fi

# test -d temp && rm -rf temp


# example use proxy download source code
# shell之变量默认值  https://blog.csdn.net/happytree001/article/details/120980066
# 使用代理下载源码
# bash  update-library.sh --proxy 1

PROXY_URL=${2:+'http://127.0.0.1:8015'}

export http_proxy=$PROXY_URL
export https_proxy=$PROXY_URL
export no_proxy='0.0.0.0/8,10.0.0.0/8,100.64.0.0/10,127.0.0.0/8,169.254.0.0/16,172.16.0.0/12,192.0.0.0/24,192.0.2.0/24,192.88.99.0/24,192.168.0.0/16,198.18.0.0/15,198.51.100.0/24,203.0.113.0/24,224.0.0.0/4,233.252.0.0/24,240.0.0.0/4,255.255.255.255/32,localhost,.npmmirror.com,.aliyuncs.com,.taobao.org,.tsinghua.edu.cn,.ustc.edu.cn,.aliyun.com'
mkdir -p temp
cd ${__DIR__}/temp


test -d frontend-utils/.git || git clone -b main https://github.com/jingjingxyk/frontend-utils.git  --depth=1 --progress

mkdir -p ${__DIR__}/../third_party/jingjingxyk/frontend-utils
cp -f frontend-utils/utils.js ${__DIR__}/../third_party/jingjingxyk/frontend-utils/utils.js


cd ${__DIR__}/temp
test -d svelte-jsoneditor/.git || git clone -b main https://github.com/josdejong/svelte-jsoneditor.git --depth=1 --progress
mkdir -p ${__DIR__}/../third_party/josdejong/svelte-jsoneditor/main
cd svelte-jsoneditor
npm install
npm run build
cp -rf package-vanilla/* ${__DIR__}/../third_party/josdejong/svelte-jsoneditor/main


cd ${__DIR__}/


test -d temp && rm -rf temp
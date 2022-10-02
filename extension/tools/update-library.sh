#!/bin/bash
set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

test -d temp && rm -rf temp
mkdir -p temp
cd temp

# example use proxy download source code
# shell之变量默认值  https://blog.csdn.net/happytree001/article/details/120980066
# 使用代理下载源码
# bash  update-library.sh --proxy 1

PROXY_URL=${2:+'http://127.0.0.1:8015'}

export http_proxy=$PROXY_URL
export https_proxy=$PROXY_URL


git clone -b main https://github.com/jingjingxyk/frontend-utils.git  --depth=1 --progress

mkdir -p ${__DIR__}/../third_party/jingjingxyk/frontend-utils
cp -f frontend-utils/utils.js ${__DIR__}/../third_party/jingjingxyk/frontend-utils/utils.js

cd ${__DIR__}

test -d temp && rm -rf temp
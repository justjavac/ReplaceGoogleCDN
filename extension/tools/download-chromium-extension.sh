#!/bin/bash
set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

if [ ! "$BASH_VERSION" ]; then
  echo "Please do not use sh to run this script ($0), just execute it directly" 1>&2
  exit 1
fi

# 执行脚本命令

# bash  extension/tools/download-chromium-extension.sh  --proxy 1


# 下载chromium 扩展，并解压
# 例子 下载 谷歌翻译扩展
# https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb


# 参考文档： https://github.com/tonystark93/crx-download/blob/master/background.js
# 参考文档： https://www.cnblogs.com/jingjingxyk/p/16821342.html

# `https://clients2.google.com/service/update2/crx?response=redirect&prodversion=${version}&acceptformat=crx2,crx3&x=id%3D${result[1]}%26uc&nacl_arch=${nacl_arch}`;


PROXY_URL=${2:+'http://127.0.0.1:8015'}

export http_proxy=$PROXY_URL
export https_proxy=$PROXY_URL

test -d temp && rm -rf temp
mkdir -p temp
cd ${__DIR__}/temp


extension_id=aapbdbdomjkkjkaonfhkkikfgjllcleb

download_url='https://clients2.google.com/service/update2/crx?response=redirect&prodversion=106.0.0.0&acceptformat=crx2,crx3&x=id%3Daapbdbdomjkkjkaonfhkkikfgjllcleb%26uc&nacl_arch=x86-64'

curl -Lo google-translate.crx $download_url

unset http_proxy
unset https_proxy
unset no_proxy


# 使用不同的代理方式
# proxychains curl -Lo google-translate.crx $download_url
# curl -x "socks5h://127.0.0.1:2000" -Lo google-translate.crx $download_url
# curl --proxy "socks5h://127.0.0.1:2000" -Lo google-translate.crx $download_url

set +e
unzip -d google-translate google-translate.crx
set -e

cd ${__DIR__}/

exit 0



test -d temp && rm -rf temp
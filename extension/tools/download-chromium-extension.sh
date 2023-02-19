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

# google translate
extension_id=aapbdbdomjkkjkaonfhkkikfgjllcleb
file_name='google-translate'

# Clear Site Data
extension_id=aihgofjefdlhpnmeakpnjjeajofpcbhj
file_name='Clear-Site-Data'

# Multi Elasticsearch Head
extension_id=cpmmilfkofbeimbmgiclohpodggeheim
file_name='Multi-Elasticsearch-Head'

# replace-google-cdn 为了看扩展市场与本仓库的代码区别
extension_id=kpampjmfiopfpkkepbllemkibefkiice
file_name='replace-google-cdn'

download_url="https://clients2.google.com/service/update2/crx?response=redirect&prodversion=109.0.5414.119&acceptformat=crx2,crx3&x=id%3D${extension_id}%26uc&nacl_arch=x86-64"

curl -Lo "${file_name}.crx" $download_url

unset http_proxy
unset https_proxy
unset no_proxy


# 使用不同的代理方式
# proxychains curl -Lo google-translate.crx $download_url
# curl -x "socks5h://127.0.0.1:2000" -Lo google-translate.crx $download_url
# curl --proxy "socks5h://127.0.0.1:2000" -Lo google-translate.crx $download_url

set +e
unzip -d ${file_name} "${file_name}.crx"
set -e

cd ${__DIR__}/

exit 0



test -d temp && rm -rf temp
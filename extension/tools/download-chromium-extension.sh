#!/bin/bash
set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

if [ ! "$BASH_VERSION" ]; then
  echo "Please do not use sh to run this script ($0), just execute it directly" 1>&2
  exit 1
fi

# 本脚本存在的意义：从扩展应用商店下载扩展

# 下载chromium 扩展，并解压
# 例子 下载 谷歌翻译扩展
# https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb


# 参考文档： https://github.com/tonystark93/crx-download/blob/master/background.js
# 参考文档： https://www.cnblogs.com/jingjingxyk/p/16821342.html

# `https://clients2.google.com/service/update2/crx?response=redirect&prodversion=${version}&acceptformat=crx2,crx3&x=id%3D${result[1]}%26uc&nacl_arch=${nacl_arch}`;

# bash  extension/tools/download-chromium-extension.sh  --proxy http://127.0.0.1:8015

mirror=''
while [ $# -gt 0 ]; do
  case "$1" in
  --proxy)
    export HTTP_PROXY="$2"
    export HTTPS_PROXY="$2"
    export NO_PROXY="127.0.0.1,localhost,127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16,198.18.0.0/15,169.254.0.0/16"
    shift
    ;;
  *) ;;

  esac
  shift $(($# > 0 ? 1 : 0))
done

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

# crx 是经过定制的 zip 压缩格式文件
set +e
unzip -d ${file_name} "${file_name}.crx"
set -e

cd ${__DIR__}/

exit 0



test -d temp && rm -rf temp
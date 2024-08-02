#!/bin/bash

if [ ! "$BASH_VERSION" ]; then
  echo "Please do not use BASH  to run this script ($0), just execute it directly" 1>&2
  exit 1
fi

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=$(
  cd ${__DIR__}/../
  pwd
)

# 本脚本存在的意义：从扩展应用商店下载扩展

# 下载chromium 扩展，并解压
# 例子 下载 谷歌翻译扩展
# https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb

# 参考文档： https://github.com/tonystark93/crx-download/blob/master/background.js
# 参考文档： https://www.cnblogs.com/jingjingxyk/p/16821342.html

# `https://clients2.google.com/service/update2/crx?response=redirect&prodversion=${version}&acceptformat=crx2,crx3&x=id%3D${result[1]}%26uc&nacl_arch=${nacl_arch}`;

## 下载命令例子：
# bash  tools/download-chromium-extension.sh  --proxy http://127.0.0.1:8015


while [ $# -gt 0 ]; do
  case "$1" in
  --proxy)
    export HTTP_PROXY="$2"
    export HTTPS_PROXY="$2"
    NO_PROXY="127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16"
    NO_PROXY="${NO_PROXY},::1/128,fe80::/10,fd00::/8,ff00::/8"
    export NO_PROXY="${NO_PROXY},localhost"
    ;;
  *) ;;
  esac
  shift $(($# > 0 ? 1 : 0))
done

mkdir -p chromium-extensions
cd ${__PROJECT__}/var/chromium-extensions


# Clear Site Data
extension_id=aihgofjefdlhpnmeakpnjjeajofpcbhj
file_name='Clear-Site-Data'

# Multi Elasticsearch Head
extension_id=cpmmilfkofbeimbmgiclohpodggeheim
file_name='Multi-Elasticsearch-Head'

# replace-google-cdn 为了看扩展市场与本仓库的代码区别
extension_id=kpampjmfiopfpkkepbllemkibefkiice
file_name='replace-google-cdn'

download_url="https://clients2.google.com/service/update2/crx?response=redirect&prodversion=114.0.5726.0&acceptformat=crx2,crx3&x=id%3D${extension_id}%26uc&nacl_arch=x86-64"

curl -Lo "${file_name}.crx" $download_url

# 使用不同的代理方式
# proxychains curl -Lo google-translate.crx $download_url
# curl -x "socks5h://127.0.0.1:2000" -Lo google-translate.crx $download_url
# curl --proxy "socks5h://127.0.0.1:2000" -Lo google-translate.crx $download_url

# crx 是经过定制的 zip 压缩格式文件
set +e
unzip -d ${file_name} "${file_name}.crx"
set -e

cd ${__PROJECT__}/var/chromium-extensions


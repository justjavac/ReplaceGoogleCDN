#!/bin/bash
set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
echo ${__DIR__}


__ROOT__=$(readlink -f ${__DIR__}/../../)
echo ${__ROOT__}


__WEB_DIR__=$(
  cd ${__DIR__}/web/
  pwd
)
echo ${__WEB_DIR__}


cd ${__WEB_DIR__}

# 用于 解决google 翻译不能用的

# 原理： https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file

cp -f proxy.js proxy.pac

python3 -m http.server 8000

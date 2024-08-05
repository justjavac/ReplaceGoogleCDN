#!/usr/bin/env bash
set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)

__PROJECT__=$(readlink -f ${__DIR__}/../)
echo ${__PROJECT__}

cd ${__PROJECT__}/tools/web/

# 用于 解决 google 翻译不能用的
# 打开 Chrome 应用商店

# 原理： https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file

cp -f ${__PROJECT__}/tools/web/proxy.js ${__PROJECT__}/tools/web/proxy.pac

python3 -m http.server 65530

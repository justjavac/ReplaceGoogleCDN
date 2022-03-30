#!/bin/bash

set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

# 启动 本地 http 代理

socat -d -d TCP4-LISTEN:8015,reuseaddr,fork ssl:tls.proxy.xiaoshuogeng.com:8015,verify=1
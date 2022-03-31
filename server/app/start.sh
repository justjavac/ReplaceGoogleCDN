#!/bin/env bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd "${__DIR__}"


# 通过远程 服务启动http proxy

cd  ${__DIR__}/../etc/nginx/conf.d/

test -f dynamic-replace-server-name.conf.bak  && mv dynamic-replace-server-name.conf.bak dynamic-replace-server-name.conf
test -f replace-server-name.conf.bak  && mv replace-server-name.conf.bak  replace-server-name.conf
test -f  http-proxy.conf.bak  && mv  http-proxy.conf.bak http-proxy.conf && docker exec -i nginx-proxy-server nginx -s reload


cd "${__DIR__}"
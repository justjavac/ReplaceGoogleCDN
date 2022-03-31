#!/bin/env bash

set -eux

__DIR__=$(cd "$(dirname "$0")";pwd)
cd "${__DIR__}"


cd  ${__DIR__}/../etc/nginx/conf.d/

test -f dynamic-replace-server-name.conf  && mv dynamic-replace-server-name.conf  dynamic-replace-server-name.conf.bak
test -f replace-server-name.conf  && mv replace-server-name.conf  replace-server-name.conf.bak

test -f http-proxy.conf  && mv http-proxy.conf  http-proxy.conf.bak  && docker exec -i nginx-proxy-server nginx -s reload


cd "${__DIR__}"
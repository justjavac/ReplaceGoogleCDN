#!/bin/bash
set -eux

__DIR__=$(cd "$(dirname "$0")";pwd)
cd "${__DIR__}"

# tls 目录存放 https 证书
{
  docker stop nginx-proxy-server
} ||
{
  echo $?
}

docker run --rm  \
--name nginx-proxy-server \
-p 80:80 \
-p 443:443 \
-p 8029:8029 \
-v "${__DIR__}"/etc/nginx/nginx.conf:/etc/nginx/nginx.conf \
-v "${__DIR__}"/etc/nginx/conf.d/:/etc/nginx/conf.d/ \
-v "${__DIR__}"/tls:/tls/ \
nginx:alpine

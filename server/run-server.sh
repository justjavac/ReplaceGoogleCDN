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
-v "${__DIR__}"/nginx-ok.conf:/etc/nginx/nginx.conf \
-v "${__DIR__}"/custom-proxy-header.item:/etc/nginx/conf.d/custom-proxy-header.item \
-v "${__DIR__}"/hidden_proxy_headers.item:/etc/nginx/conf.d/hidden_proxy_headers.item \
-v "${__DIR__}"/tls:/tls/ \
nginx:alpine

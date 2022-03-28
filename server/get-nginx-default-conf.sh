#!/bin/bash

set -eux
__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

# 获得nginx 默认配置文件
container_id=$(docker create nginx:alpine)  # returns container ID
docker cp "$container_id":/etc/nginx/nginx.conf nginx.conf
docker cp "$container_id":/etc/nginx/conf.d/ conf.d

# shellcheck disable=SC2086
docker rm $container_id

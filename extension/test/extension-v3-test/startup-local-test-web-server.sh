#!/bin/bash
set -exu


__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}
# pythone 启动 一个 http 服务，web 目录 当前目录

python3 -m http.server 8001
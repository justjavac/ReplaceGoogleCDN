#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}


# 启动 本场 web 服务

gnome-terminal --window  -- sh "${__DIR__}/extension-v3-test/startup-local-test-web-server.sh" &&

gnome-terminal --window  -- sh "${__DIR__}/chromium-tools/setup-local-http-proxy.sh" &&
gnome-terminal --window  -- sh "${__DIR__}/chromium-tools/setup-chromium-remote-debug-listen.sh"

# 1. 启动一个代理
# 2. 启动chromim remote debug 端口转发
# 3. check chromium 最新版
# 4. 启动chrome

sh ${__DIR__}/chromium-tools/update-and-run.sh



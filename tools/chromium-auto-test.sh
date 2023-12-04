#!/bin/bash

set -exu

# __DIR__=$(cd "$(dirname "$0")";pwd)
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=$(
  cd ${__DIR__}/../
  pwd
)

cd ${__DIR__}


# 自动测试
#  浏览器日志位于 nohup.out 文件


sleep 11

# 参考： https://chromedevtools.github.io/devtools-protocol/

curl http://localhost:9222/json/protocol
curl http://localhost:9222/json/version

exit 0
curl  http://127.0.0.1:9222/json/new?https://stackoverflow.com/tags/socat/hot?filter=all
curl  http://127.0.0.1:9222/json/new?https://patrickhlauke.github.io/recaptcha/
curl  http://127.0.0.1:9222/json/new?https://cdn.jsdelivr.net/
curl  http://127.0.0.1:9222/json/new?https://developers.google.com/

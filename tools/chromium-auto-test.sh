#!/usr/bin/env bash

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

# 参考： https://chromedevtools.github.io/devtools-protocol/

# 显示CDP 可用参数
curl -fsS http://localhost:9222/json/protocol >/dev/null

curl -fsS http://localhost:9222/json/version

test_urls=(
  "https://stackoverflow.com/tags/socat/hot?filter=all"
  "https://patrickhlauke.github.io/recaptcha/"
  "https://cdn.jsdelivr.net/"
  "https://developers.google.com/"
)

for test_url in "${test_urls[@]}"; do
  curl -fsS -X PUT "http://127.0.0.1:9222/json/new?${test_url}" >/dev/null
done

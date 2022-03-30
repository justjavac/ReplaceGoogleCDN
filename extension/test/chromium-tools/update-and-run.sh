#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}




## 加载最新chromium 版本
## 首次下载chromium 浏览器，存储在当前脚本目录

#sh download-latest-chromium.sh 1  # 强行更新chromium为最新版
sh download-latest-chromium.sh
sh run-chromium.sh

#!/bin/bash

set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

# chrome remote debug port listen 端口转发， 实现无限制的远程调试

socat -d -d TCP4-LISTEN:9222,reuseaddr,reuseport,fork,retry=3 TCP4:127.0.0.1:9221
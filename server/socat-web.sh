#!/bin/bash

set -eux

__CURRENT__=$(pwd)
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd "${__DIR__}"

socat -d -d TCP-LISTEN:33347,fork,reuseaddr,reuseport SYSTEM:"bash app/bash-web.sh"

#crlf,nonblock,ignoreeof

# exec:'bash -li',pty,stderr,setsid,sigint,sane

#!/bin/bash
set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
#__ROOT__=$(readlink -f ${__DIR__}/../)
__ROOT__=$(
  cd ${__DIR__}/../
  pwd
)
echo ${__ROOT__}/web/
cd web
python3 -m http.server 8000

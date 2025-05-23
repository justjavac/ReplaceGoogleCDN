#!/usr/bin/env bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)

__PROJECT__=$(
  cd ${__DIR__}/../
  pwd
)

mkdir -p ${__PROJECT__}/var/
cd ${__PROJECT__}/var/

pip3 install uv -i https://pypi.tuna.tsinghua.edu.cn/simple
uv venv --python 3.13
. .venv/bin/activate

cd ${__PROJECT__}/tools/

uv pip install --upgrade -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

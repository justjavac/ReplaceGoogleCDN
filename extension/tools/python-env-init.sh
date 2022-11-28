#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}
python3 -m venv venv

. venv/bin/activate

pip3 install --upgrade -r  requirements.txt  -i https://pypi.tuna.tsinghua.edu.cn/simple

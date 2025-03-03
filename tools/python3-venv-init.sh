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

python3 -m venv venv

. venv/bin/activate

cd ${__PROJECT__}/tools/

pip3 install mkdocs-material -i https://pypi.tuna.tsinghua.edu.cn/simple
pip3 install playwright -i https://pypi.tuna.tsinghua.edu.cn/simple

pip3 freeze > requirements.txt

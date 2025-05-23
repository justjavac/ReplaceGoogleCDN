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

# python3 -m venv venv
# . venv/bin/activate

# python3 -m pip install uv -i https://pypi.tuna.tsinghua.edu.cn/simple
pip3 install uv -i https://pypi.tuna.tsinghua.edu.cn/simple
uv venv --python 3.13
. .venv/bin/activate

python --version

cd ${__PROJECT__}/tools/

uv pip install mkdocs-material -i https://pypi.tuna.tsinghua.edu.cn/simple
uv pip install playwright -i https://pypi.tuna.tsinghua.edu.cn/simple

uv pip freeze >requirements.txt

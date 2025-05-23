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

# docker pull squidfunk/mkdocs-material

mkdir -p ${__PROJECT__}/var/
cd ${__PROJECT__}/var/

if [ ! -d "${__PROJECT__}/var/.venv" ]; then
  bash ${__PROJECT__}/tools/python3-venv-install.sh
fi

. .venv/bin/activate

cd ${__PROJECT__}/

mkdocs --help
# mkdocs new .
mkdocs build --help
mkdocs build -d dist/docs/
# mkdocs serve -f mkdocs.yml
python3 -m http.server  -d dist/docs/ 8000

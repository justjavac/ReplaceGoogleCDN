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

cd ${__PROJECT__}

bash release-archive.sh
bash release-archive-v3.sh

cd ${__PROJECT__}

# 默认部署目录为，本项目的上一级目录，文件夹名称：ReplaceGoogleCDN-v3

test -d ${__PROJECT__}/../ReplaceGoogleCDN-v3 && rm -rf ${__PROJECT__}/../ReplaceGoogleCDN-v3

mv ${__PROJECT__}/dist/ReplaceGoogleCDN-v3 ${__PROJECT__}/../

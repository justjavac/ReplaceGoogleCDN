#!/bin/bash

set -ex
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=$(
  cd ${__DIR__}/../
  pwd
)

mkdir -p ${__PROJECT__}/var/firefox-extensions

cd ${__PROJECT__}/var/firefox-extensions

#  扩展 TWP - Translate Web Pages  traduzir-paginas-web
#  https://addons.mozilla.org/en-US/firefox/addon/traduzir-paginas-web/

# 下载扩展
# https://addons.mozilla.org/firefox/downloads/file/4126844/traduzir_paginas_web-9.8.1.0.xpi

# download firefox extension

curl -Lo traduzir_paginas_web-9.8.1.0.xpi https://addons.mozilla.org/firefox/downloads/file/4126844/traduzir_paginas_web-9.8.1.0.xpi

# 解压扩展到  profile 目录
# mkdir -p "$profile_folder/extensions/{036a55b4-5e72-4d05-a06c-cba2dfcc134a}.xpi"
# unzip -d traduzir_paginas_web-9.8.1.0.xpi

# mkdir -p $profile_folder/extensions

# cp -f traduzir_paginas_web-9.8.1.0.xpi "$profile_folder/extensions/{036a55b4-5e72-4d05-a06c-cba2dfcc134a}.xpi"

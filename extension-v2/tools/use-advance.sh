#!/bin/env bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

__ROOT__=$(
  cd ${__DIR__}/../
  pwd
)
cd  ${__ROOT__}
pwd

ls -lh js/background.js
test -f js/background-default.js || cp js/background.js js/background-default.js

test -f js/background-advance.js && cp -f js/background-advance.js js/background.js
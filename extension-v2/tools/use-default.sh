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

test -f js/background-default.js  && cp -f js/background-default.js  js/background.js
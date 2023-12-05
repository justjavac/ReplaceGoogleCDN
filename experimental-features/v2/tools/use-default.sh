#!/bin/env bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

__ROOT__=$(
  cd ${__DIR__}/../../../
  pwd
)
cd  ${__ROOT__}

mkdir -p ${__ROOT__}/var/tmp/v2/js/


test -f ${__ROOT__}/var/tmp/v2/js/background-default.js  && cp -f ${__ROOT__}/var/tmp/v2/js/background-default.js  ${__ROOT__}/extension-v2/js/background.js
#!/bin/env bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}


__PROJECT__=$(readlink -f ${__DIR__}/../../)

cd ${__PROJECT__}

npx prettier --write .

cd ${__DIR__}
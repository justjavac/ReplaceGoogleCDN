#!/bin/env bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

__ROOT__=$(readlink -f ${__DIR__}/../)

cd ${__ROOT__}

npx prettier --write .

cd ${__DIR__}
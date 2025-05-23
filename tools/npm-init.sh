#!/usr/bin/env bash

set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

__PROJECT__=$(readlink -f ${__DIR__}/../)

cd ${__PROJECT__}

MIRROR=''
UPGRADE=0
while [ $# -gt 0 ]; do
  case "$1" in
  --mirror)
    MIRROR="$2"
    ;;
  --upgrade)
    UPGRADE=1
    ;;
  *) ;;

  esac
  shift $(($# > 0 ? 1 : 0))
done

if [[ ! -f ${__PROJECT__}/runtime/node/bin/node ]]; then
  if [[ "$MIRROR" == "china" ]]; then
    bash tools/setup-nodejs-runtime.sh --mirror china
  else
    bash tools/setup-nodejs-runtime.sh
  fi

fi

export PATH=${__PROJECT__}/runtime/node/bin:$PATH

if [[ "$MIRROR" == "china" ]]; then
  npm install -d --registry=https://registry.npmmirror.com
else
  npm install -d
fi

if [[ $UPGRADE -eq 1 ]]; then
  if [[ "$MIRROR" == "china" ]]; then
    npx npm-check-updates -u
  else
    npx npm-check-updates -u
  fi
fi

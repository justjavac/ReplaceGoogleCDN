#!/usr/bin/env bash

set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

__PROJECT__=$(readlink -f ${__DIR__}/../)

cd ${__PROJECT__}

if [[ ! -f ${__PROJECT__}/bin/runtime/node/bin/node ]]; then
  bash tools/setup-nodejs-runtime.sh --mirror china
fi

export PATH=${__PROJECT__}/bin/runtime/node/bin:$PATH

# npm install pnpm npm-check -save-dev --registry=https://registry.npmmirror.com

npx pnpm install --registry=https://registry.npmmirror.com

exit 0

# npm install pnpm npm-check --dev --registry=https://registry.npmmirror.com

npx npm-check-updates -u

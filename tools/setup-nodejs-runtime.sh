#!/usr/bin/env bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=$(
  cd "${__DIR__}/../"
  pwd
)

shopt -s expand_aliases
cd ${__PROJECT__}

OS=$(uname -s)
ARCH=$(uname -m)

case $OS in
'Linux')
  OS="linux"
  ;;
'Darwin')
  OS="darwin"
  ;;
*)
  case $OS in
  'MSYS_NT'*)
    OS="win"
    ;;
  'MINGW64_NT'*)
    OS="win"
    ;;
  *)
    echo '暂未配置的 OS '
    exit 0
    ;;
  esac
  ;;
esac

case $ARCH in
'x86_64')
  ARCH="x64"
  ;;
'aarch64' | 'arm64')
  ARCH="arm64"
  ;;
*)
  echo '暂未配置的 ARCH '
  exit 0
  ;;
esac

APP_VERSION='v22.16.0'
APP_NAME='node'
VERSION='v22.16.0'

cd ${__PROJECT__}
mkdir -p runtime/
mkdir -p var/runtime
APP_RUNTIME_DIR=${__PROJECT__}/runtime/${APP_NAME}
mkdir -p ${APP_RUNTIME_DIR}

cd ${__PROJECT__}/var/runtime

: <<'EOF'
https://nodejs.org/
https://nodejs.org/dist/v22.16.0/node-v22.16.0-darwin-x64.tar.gz
https://nodejs.org/dist/v22.16.0/node-v22.16.0-darwin-x64.tar.gz
https://nodejs.org/dist/v22.16.0/node-v22.16.0-darwin-arm64.tar.gz
https://nodejs.org/dist/v22.16.0/node-v22.16.0-linux-arm64.tar.xz
https://nodejs.org/dist/v22.16.0/node-v22.16.0-linux-arm64.tar.xz
https://nodejs.org/dist/v22.16.0/node-v22.16.0-win-arm64.zip
https://nodejs.org/dist/v22.16.0/node-v22.16.0-win-x64.zip
https://registry.npmmirror.com/-/binary/node/v22.16.0/node-v22.16.0-win-x64.zip
EOF

APP_DOWNLOAD_URL="https://nodejs.org/dist/${VERSION}/${APP_NAME}-${APP_VERSION}-${OS}-${ARCH}.tar.xz"

if [ $OS = 'win' ]; then
  APP_DOWNLOAD_URL="https://nodejs.org/dist/${VERSION}/${APP_NAME}-${APP_VERSION}-${OS}-${ARCH}.zip"
fi

MIRROR=''
while [ $# -gt 0 ]; do
  case "$1" in
  --mirror)
    MIRROR="$2"
    ;;
  --proxy)
    export HTTP_PROXY="$2"
    export HTTPS_PROXY="$2"
    NO_PROXY="127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16"
    NO_PROXY="${NO_PROXY},::1/128,fe80::/10,fd00::/8,ff00::/8"
    NO_PROXY="${NO_PROXY},localhost"
    export NO_PROXY="${NO_PROXY},.tsinghua.edu.cn,.ustc.edu.cn,.npmmirror.com"
    ;;
  --*)
    echo "Illegal option $1"
    ;;
  esac
  shift $(($# > 0 ? 1 : 0))
done

case "$MIRROR" in
china)
  APP_DOWNLOAD_URL="https://registry.npmmirror.com/-/binary/node/${APP_VERSION}/${APP_NAME}-${APP_VERSION}-${OS}-${ARCH}.tar.xz"
  if [ $OS = 'windows' ]; then
    APP_DOWNLOAD_URL="https://registry.npmmirror.com/-/binary/node/${APP_VERSION}/${APP_NAME}-${APP_VERSION}-${OS}-${ARCH}.zip"
  fi
  ;;
esac

APP_RUNTIME="${APP_NAME}-${APP_VERSION}-${OS}-${ARCH}"
if [ $OS = 'win' ]; then
  {
    test -f ${APP_RUNTIME}.zip || curl -fSLo ${APP_RUNTIME}.zip ${APP_DOWNLOAD_URL}
    test -d ${APP_RUNTIME} && rm -rf ${APP_RUNTIME}
    unzip "${APP_RUNTIME}.zip"
    exit 0
  }
else
  if [ $OS = "darwin" ]; then
    test -f ${APP_RUNTIME}.tar.gz || curl -fSLo ${APP_RUNTIME}.tar.gz ${APP_DOWNLOAD_URL}
    test -d ${APP_RUNTIME} && rm -rf ${APP_RUNTIME}
    tar -xvf ${APP_RUNTIME}.tar.gz

  else
    test -f ${APP_RUNTIME}.tar.xz || curl -fSLo ${APP_RUNTIME}.tar.xz ${APP_DOWNLOAD_URL}
    test -f ${APP_RUNTIME}.tar || xz -d -k ${APP_RUNTIME}.tar.xz
    test -d ${APP_RUNTIME} || tar -xvf ${APP_RUNTIME}.tar
  fi
  test -d ${APP_RUNTIME_DIR} && rm -rf ${APP_RUNTIME_DIR}
  mv ${APP_RUNTIME} ${APP_RUNTIME_DIR}
fi

cd ${__PROJECT__}/

set +x

echo " "
echo " USE PHP RUNTIME :"
echo " "
echo " export PATH=\"${APP_RUNTIME_DIR}/bin/:\$PATH\" "
echo " "

cd ${__PROJECT__}
export PATH="${APP_RUNTIME_DIR}/bin/:$PATH"
node -v
npm config get prefix
npm list -g --depth=0
npm -v
npx -v

# shellcheck disable=SC2217
: <<'EOF'

npm install pnpm --registry=https://registry.npmmirror.com
pnpm -v
which pnpm

node -e "require('corepack')" # 无报错则正常
corepack --version            # 输出版本号
corepack enable pnpm

# corepack enable
npm doctor

# 指定 NPM 仓库下载源

npm install -g pnpm --registry=https://registry.npmmirror.com

npm install  pnpm --registry=https://registry.npmmirror.com

npm config  set registry https://registry.npmmirror.com


EOF

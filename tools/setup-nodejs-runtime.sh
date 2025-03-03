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

APP_VERSION='v22.14.0'
APP_NAME='node'
VERSION='v22.14.0'

mkdir -p bin/runtime
mkdir -p var/runtime

cd ${__PROJECT__}/var/runtime

: <<'EOF'
https://nodejs.org/dist/v20.15.1/node-v20.15.1-darwin-x64.tar.gz
https://nodejs.org/dist/v20.15.1/node-v20.15.1-darwin-arm64.tar.gz
https://nodejs.org/dist/v20.15.1/node-v20.15.1-linux-arm64.tar.xz
https://nodejs.org/dist/v20.15.1/node-v20.15.1-linux-arm64.tar.xz
https://nodejs.org/dist/v20.15.1/node-v20.15.1-win-arm64.zip
https://nodejs.org/dist/v20.15.1/node-v20.15.1-win-x64.zip
https://registry.npmmirror.com/-/binary/node/v20.15.1/node-v20.15.1-win-x64.zip
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
  test -d ${__PROJECT__}/bin/runtime/node && rm -rf ${__PROJECT__}/bin/runtime/node
  mv ${APP_RUNTIME} ${__PROJECT__}/bin/runtime/node
fi

cd ${__PROJECT__}/

set +x

echo " "
echo " USE PHP RUNTIME :"
echo " "
echo " export PATH=\"${__PROJECT__}/bin/runtime/node/bin/:\$PATH\" "
echo " "
export PATH="${__PROJECT__}/bin/runtime/node/bin/:$PATH"
node -v
npm -v
npx -v

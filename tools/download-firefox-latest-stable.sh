#!/usr/bin/env bash

set -ex
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=$(
  cd ${__DIR__}/../
  pwd
)

while [ $# -gt 0 ]; do
  case "$1" in
  --proxy)
    export HTTP_PROXY="$2"
    export HTTPS_PROXY="$2"
    NO_PROXY="127.0.0.0/8,10.0.0.0/8,100.64.0.0/10,172.16.0.0/12,192.168.0.0/16"
    NO_PROXY="${NO_PROXY},::1/128,fe80::/10,fd00::/8,ff00::/8"
    export NO_PROXY="${NO_PROXY},localhost"
    ;;
  *) ;;

  esac
  shift $(($# > 0 ? 1 : 0))
done

mkdir -p ${__PROJECT__}/var/

cd ${__PROJECT__}/var/

# http://download.cdn.mozilla.net/pub/firefox/releases/latest/README.txt
# https://download.mozilla.org/?product=firefox-latest&os=win&lang=en-US

# wget -O FirefoxSetup.exe "https://download.mozilla.org/?product=firefox-latest&os=win&lang=en-US"

# show latest version
# curl -fI 'https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US' | grep -o 'firefox-[0-9.]\+[0-9]'  | sed 's/firefox-//'

OS=$(uname -s)
ARCH=$(uname -m)
echo "${OS}-${ARCH}"

case $OS in
"Linux")
  test -f firefox.tar.bz2 && rm -rf firefox.tar.bz2
  test -f firefox.tar.xz && rm -rf firefox.tar.xz
  test -d firefox && rm -rf firefox
  curl -Lo firefox.tar.xz "https://download.mozilla.org/?product=firefox-latest&os=linux64&lang=en-US"
  tar -xJvf firefox.tar.xz
  ;;
"Darwin")
  curl -Lo firefox.dmg "https://download.mozilla.org/?product=firefox-latest&os=osx&lang=en-US"
  # 使用 hdiutil 挂载 DMG格式 文件
  UUID=$(uuidgen)
  TMP_MOUNT_POINT=/tmp/${UUID}
  mkdir -p "${TMP_MOUNT_POINT}"
  cleanup_firefox_dmg_mount() {
    local detach_status=0
    hdiutil detach "${TMP_MOUNT_POINT}" || detach_status=$?
    rmdir "${TMP_MOUNT_POINT}" >/dev/null 2>&1 || true
    return "${detach_status}"
  }
  trap 'cleanup_firefox_dmg_mount || true' EXIT
  hdiutil attach -mountpoint "${TMP_MOUNT_POINT}" firefox.dmg

  # 将应用程序拷贝到指定目录
  mkdir -p ${__PROJECT__}/var/firefox
  cp -rf "${TMP_MOUNT_POINT}/Firefox.app" "${__PROJECT__}/var/firefox"
  ls -lh ${__PROJECT__}/var/firefox/
  cleanup_firefox_dmg_mount
  trap - EXIT

  ;;

'MINGW64_NT'* | 'MSYS_NT'*)
  curl -Lo firefox.exe "https://download.mozilla.org/?product=firefox-latest&os=win64&lang=en-US"
  ;;
*)
  echo 'no match OS'
  exit 1
  ;;
esac

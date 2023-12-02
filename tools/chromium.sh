#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=$(
  cd ${__DIR__}/../
  pwd
)

cd ${__DIR__}

XVFB_COMMAND=''
while [ $# -gt 0 ]; do
  case "$1" in
  -xvfb)
      XVFB_COMMAND='xvfb-run  -s "-terminate -screen 0 1920x1080x24" '
    ;;
  *)
    ;;
  esac
  shift $(($# > 0 ? 1 : 0))
done


OS=$(uname -s)
ARCH=$(uname -m)
echo "$OS"

export GOOGLE_API_KEY="no"
export GOOGLE_DEFAULT_CLIENT_ID="no"
export GOOGLE_DEFAULT_CLIENT_SECRET="no"

UUID=''
CHROMIUM=''

case $OS in
"Linux")
    UUID=$(cat /proc/sys/kernel/random/uuid)
    CHROMIUM='chrome-linux/chrome'
  ;;
"Darwin")
    UUID=$(uuidgen)
    CHROMIUM='chrome-mac/Chromium.app/Contents/MacOS/Chromium'
  ;;
"MINGW64_NT")
    # set chrome_user_data_dir='C:\Users\%username%\Local" "Settings\Temp\chrome-user-data'
    # IF NOT EXIST %chrome_user_data_dir%  MD %chrome_user_data_dir%
    CHROMIUM='chrome-win\\chrome.exe'
  ;;
  *)
    echo 'current script no support !'
    exit 0
  ;;
esac

test -d /tmp/${UUID} || mkdir -p /tmp/${UUID}
USER_DATA=/tmp/${UUID}

echo ${CHROMIUM}

cd ${__PROJECT__}/var

#扩展所在目录
extensions=${__PROJECT__}/extension


${XVFB_COMMAND} ${CHROMIUM} \
  --user-data-dir=$USER_DATA \
  --enable-remote-extensions \
  --enable-extensions \
  --load-extension="$extensions" \
  --auto-open-devtools-for-tabs \
  --enable-logging=stderr --v=1 \
  --remote-debugging-port=9222 \
  --disable-encryption --disable-machine-id \
  --start-maximized \
  about:blank

# chrome://version
# 全屏
# --start-fullscreen
# 空白页
# about:blank
# 查看所有内置命令
# chrome://chrome-urls/
# 使用 代理 方式一
# --proxy-pac-url="http://127.0.0.1:8000/proxy.pac"
# 使用 代理 方式二
# --proxy-server="http=http://127.0.0.1:8015;https=http://127.0.0.1:8015"
# 使用 代理 方式三
#--proxy-server="SOCKS5://127.0.0.1:2000"

# --host-resolver-rules="MAP * ~NOTFOUND , EXCLUDE 127.0.0.1"

#  --flag-switches-begin \
#  --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure,ProcessPerSiteUpToMainFrameThreshold \
#  --enable-features=VaapiVideoDecodeLinuxGL \
#  --enable-features=PlatformHEVCDecoderSupport \
#  --flag-switches-end \
# --disable-extensions-except=



:<<'EOF'

MACOS  chrome 硬解 HEVC
添加下面这个启动参数就可以了 open /Applications/Google\ Chrome.app --args --enable-features=PlatformHEVCDecoderSupport

EOF

# webrtc 监测
# chrome://webrtc-internals/


# 浏览器使用pac代理
# chromium  --proxy-pac-url="http://localhost:8000/proxy.pac"

# 浏览器使用http代理
# chromium  --proxy-server="http=127.0.0.1:1087;https=127.0.0.1:1087"

# 浏览器使用socks5代理
# chromium --proxy-server="socks5://127.0.0.1:1080" --host-resolver-rules="MAP * ~NOTFOUND , EXCLUDE 127.0.0.1"


# mac 上启动chromium
# "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --flag-switches-begin --flag-switches-end -enable-logging=stderr --v=1

# chromium自定义启动参数 和 启用远程调试
# https://www.cnblogs.com/jingjingxyk/p/16577987.html
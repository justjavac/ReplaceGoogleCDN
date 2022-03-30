#!/bin/bash

set -exu
__CURRENT__=$(pwd)
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}

kernel_name=$(uname -s)
echo "$kernel_name"



if test "$kernel_name" = "Linux"; then
  {

    test -d /tmp/chromium-tools-user-data || mkdir /tmp/chromium-tools-user-data

    dir=/tmp/chromium-tools-user-data
    #linux
    echo 'linux'

    extension_dir=${__DIR__}/../../
    inject_js_extension_dir=${__DIR__}/../scripts-inject-extension/
    export GOOGLE_API_KEY="no"
    export GOOGLE_DEFAULT_CLIENT_ID="no"
    export GOOGLE_DEFAULT_CLIENT_SECRET="no"
    chrome_setup_cmd="chrome-linux/chrome --user-data-dir=$dir --remote-debugging-port=9221  --auto-open-devtools-for-tabs --enable-remote-extensions --enable-extensions  --load-extension=$extension_dir,$inject_js_extension_dir"

    echo "browser open  chrome://extensions/"
    echo "browser open  chrome://version/ "
    $($chrome_setup_cmd    https://stackoverflow.com/questions --new-tab "about:blank" )


  }
elif test "$kernel_name" = "Darwin"; then
  {

    extension_dir=${__DIR__}/../../
    inject_js_extension_dir=${__DIR__}/../scripts-inject-extension/
    test -d /tmp/chromium-tools-user-data || mkdir /tmp/chromium-tools-user-data
    dir=/tmp/chromium-tools-user-data
    export GOOGLE_API_KEY="no"
    export GOOGLE_DEFAULT_CLIENT_ID="no"
    export GOOGLE_DEFAULT_CLIENT_SECRET="no"
    chrome_setup_cmd="chrome-linux/chrome --user-data-dir=$dir --remote-debugging-port=9221  --auto-open-devtools-for-tabs --enable-remote-extensions --enable-extensions  --load-extension=$extension_dir,$inject_js_extension_dir"

    echo "browser open  chrome://extensions/"
    echo "browser open  chrome://version/ "
    $($chrome_setup_cmd    https://stackoverflow.com/questions --new-tab "about:blank" )

  }
else
  {
    # =MINGW64_NT
    setx GOOGLE_API_KEY "no"
    setx GOOGLE_DEFAULT_CLIENT_ID "no"
    setx GOOGLE_DEFAULT_CLIENT_SECRET "no"

    #set chrome_user_data_dir='C:\Users\%username%\Local" "Settings\Temp\chrome-user-data'
    #IF NOT EXIST %chrome_user_data_dir%  MD %chrome_user_data_dir%
    chrome-win\\chrome.exe https://stackoverflow.com/questions

  }
fi

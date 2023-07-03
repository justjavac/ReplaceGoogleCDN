#!/bin/bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd ${__DIR__}

__ROOT__=$(cd ${__DIR__}/../;pwd)

uuid=$(cat /proc/sys/kernel/random/uuid)
profile_folder="/tmp/${uuid}"

mkdir -p  $profile_folder

cd ${__DIR__}


# https://wiki.mozilla.org/Firefox/CommandLineOptions

# firefox use Manifest V3
# https://extensionworkshop.com/documentation/develop/manifest-v3-migration-guide/

./firefox/firefox \
-profile "$profile_folder" \
-start-debugger-server 9221 \
 about:debugging#/runtime/this-firefox

# -devtools \
# -jsconsole \
#  about:blank
# -install-global-extension  ${__ROOT__}/extension-v2 \
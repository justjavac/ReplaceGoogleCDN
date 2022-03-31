#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}



curl http://127.0.0.1:9222/json/new?chrome://version/
curl http://127.0.0.1:9222/json/new?chrome://extensions/
curl http://127.0.0.1:9222/json/new?chrome://chrome-urls

curl htt://127.0.0.1:9222/json/new?http://127.0.0.1:8001

curl htt://127.0.0.1:9222/json/new?https://github.com
curl http://127.0.0.1:9222/json/new?https://www.google.com
curl http://127.0.0.1:9222/json/new?https://www.baidu.com
curl http://127.0.0.1:9222/json/new?https://www.qq.com

exit
curl \
    --data-urlencode "paramName=value" \
    --data-urlencode "secondParam=value" \
    http://example.com
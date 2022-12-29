#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
__PROJECT__=$(
  cd ${__DIR__}/../../
  pwd
)


cd ${__PROJECT__}

bash release-archive.sh

cd ${__PROJECT__}

# 默认部署在和本项目同级目录，文件夹名称：ReplaceGoogleCDN-v3
test -d ${__PROJECT__}/../ReplaceGoogleCDN-v3 && rm -rf ${__PROJECT__}/../ReplaceGoogleCDN-v3

mv  ${__PROJECT__}/dist/ReplaceGoogleCDN-v3 ${__PROJECT__}/../


exit 0

cd ${__PROJECT__}

# 上传到指定服务器 例子

key=/home/username/key.pem
domain=chromium-extensions.jingjingxyk.com

rsync -az -r -z -v -e "ssh -p 22 -i $key" --delete ${__ROOT__}/dist/ReplaceGoogleCDN-v2.zip  root@${domain}:/data/webspace/chromium-extensions/ReplaceGoogleCDN-v2.zip
rsync -az -r -z -v -e "ssh -p 22 -i $key" --delete ${__ROOT__}/dist/ReplaceGoogleCDN-v3.zip  root@${domain}:/data/webspace/chromium-extensions/ReplaceGoogleCDN-v3.zip


:<<'EOF'

scp  -P 22 -i $key -v -C  \
-o StrictHostKeyChecking=no  \
${__PROJECT__}/dist/*.zip root@${domain}:/data/webspace/chromium-extensions/

EOF

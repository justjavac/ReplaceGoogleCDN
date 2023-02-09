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

#time=`date -u '+%Y-%m-%dT%H:%M:%SZ'`
time=$(date -u '+%Y-%m-%dT%H-%M-%SZ')
echo $time

test -d dist && rm -rf dist
mkdir -p dist/build

# 复制目录中的所有文件，但特定子目录中的某些文件除外
rsync -avr --delete-before --stats --progress extension/ dist/build/ReplaceGoogleCDN-v3-$time/ \
  --exclude .git/ \
  --exclude .idea/ \
  --exclude node_modules/ \
  --exclude tools/ \
  --exclude _metadata \
  --exclude 'test' \
  --exclude rules/advance-no-use \
  --exclude rules/example-no-use/backup/ \
  --exclude screenshot \
  --exclude web \
  --exclude web-backup \
  --exclude manifest-backup.json \
  --exclude third_party/highlightjs/ \
  --exclude third_party/josdejong/ \
  --exclude third_party/webrtc/

cp -f README.md dist/build/ReplaceGoogleCDN-v3-$time/
cp -f Privacy.md dist/build/ReplaceGoogleCDN-v3-$time/
cp -f LICENSE dist/build/ReplaceGoogleCDN-v3-$time/
cp -f CHANGELOG-v3-0.10.x.md dist/build/ReplaceGoogleCDN-v3-$time/

rsync -av --progress extension-v2/ dist/build/ReplaceGoogleCDN-v2-$time/ \
  --exclude README.md \
  --exclude js/background-advance.js \
  --exclude js/background-default.js \
  --exclude tools/ \
  --exclude test

cp -f README.md dist/build/ReplaceGoogleCDN-v2-$time/
cp -f Privacy.md dist/build/ReplaceGoogleCDN-v2-$time/
cp -f LICENSE dist/build/ReplaceGoogleCDN-v2-$time/
cp -f CHANGELOG-v2-0.10.x.md dist/build/ReplaceGoogleCDN-v2-$time/

cd ${__PROJECT__}/dist/build/
zip -r ${__PROJECT__}/dist/ReplaceGoogleCDN-v3-$time.zip ReplaceGoogleCDN-v3-$time/
zip -r ${__PROJECT__}/dist/ReplaceGoogleCDN-v2-$time.zip ReplaceGoogleCDN-v2-$time/
test -d ${__PROJECT__}/dist/build/ && rm -rf ${__PROJECT__}/dist/build/


cd ${__PROJECT__}/dist/
# 查看打包结果
unzip ReplaceGoogleCDN-v3-$time.zip
unzip ReplaceGoogleCDN-v2-$time.zip
cd ${__PROJECT__}

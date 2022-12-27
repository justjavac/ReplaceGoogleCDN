#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
cd ${__DIR__}
cd ${__DIR__}/../../
__ROOT__=$(pwd)

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
  --exclude rules/README.md \
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
cp -f CHANGELOG-0.10.x.md dist/build/ReplaceGoogleCDN-v3-$time/

rsync -av --progress extension-v2/ dist/build/ReplaceGoogleCDN-v2-$time/ \
  --exclude README.md \
  --exclude test

cp -f README.md dist/build/ReplaceGoogleCDN-v2-$time/
cp -f Privacy.md dist/build/ReplaceGoogleCDN-v2-$time/
cp -f LICENSE dist/build/ReplaceGoogleCDN-v2-$time/

cd ${__ROOT__}/dist/build/
zip -r ${__ROOT__}/dist/ReplaceGoogleCDN-v3-$time.zip ReplaceGoogleCDN-v3-$time/
zip -r ${__ROOT__}/dist/ReplaceGoogleCDN-v2-$time.zip ReplaceGoogleCDN-v2-$time/
test -d ${__ROOT__}/dist/build/ && rm -rf ${__ROOT__}/dist/build/


cd ${__ROOT__}/dist/
# 查看打包结果
unzip ReplaceGoogleCDN-v3-$time.zip
unzip ReplaceGoogleCDN-v2-$time.zip
cd ${__ROOT__}

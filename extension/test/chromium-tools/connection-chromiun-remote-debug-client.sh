#!/bin/bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
echo ${__DIR__}
pwd



tls_base_dir=${__DIR__}/../../../server/tls
key=$tls_base_dir/wildcard.xiaoshuogeng.com.key.pem
cert=$tls_base_dir/wildcard.xiaoshuogeng.com.fullchain.pem
cafile=$tls_base_dir/cacert.pem



test -f $tls_base_dir/cacert.pem ||  curl -L -o $tls_base_dir/cacert.pem https://curl.se/ca/cacert.pem


server=tls.proxy.xiaoshuogeng.com
snihost=$server
commonname=$server


# -t 0.1 -T 0.1
#,reuseport,reuseaddr,fork,crlf,ignoreeof,retry=3
# keepalive,forever,intervall=6000,


socat -d -d -d   ssl:$server:2001,\
reuseaddr,reuseport,\
cert=$cert,key=$key,cafile=$cafile,\
openssl-min-proto-version=TLS1.3,openssl-max-proto-version=TLS1.3,\
snihost=$snihost,commonname=$commonname,\
compress=auto,\
intervall=20,keepalive,retry=3,fork tcp:0.0.0.0:9222,crlf

socat -d -d -d   ssl:$server:2001,\
reuseaddr,reuseport,\
verify=0,\
compress=auto,\
intervall=20,keepalive,retry=3,ignoreeof,fork tcp:0.0.0.0:8001,reuseaddr
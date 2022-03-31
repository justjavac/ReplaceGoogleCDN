#!/bin/env bash

set -eux

__DIR__=$(cd "$(dirname "$0")";pwd)
cd "${__DIR__}"

# 使用Openssl生成自签名证书
# 参考 https://blog.csdn.net/moonhillcity/article/details/52768218
# 参考 https://docs.azure.cn/zh-cn/articles/azure-operations-guide/application-gateway/aog-application-gateway-howto-create-self-signed-cert-via-openssl


openssl version -a

cd "${__DIR__}/tls/"

# 生成CA私钥（.key）-->生成CA证书请求（.csr）-->自签名得到根证书（.crt）（CA给自已颁发的证书）。

# 创建私钥
openssl genrsa -out ca.key 2048

# 生成证书签名请求（CSR） (Certificate Signing Request)

# 方法一: (交互式)
# openssl req -new -key private.key -out req.csr

# 方法二:
# -subj拥有者信息
# CN：Country Name  国家；
# ST: Province Name  省市；
# L: Locality Name 市；
# O： Organization Name 组织名称；
# OU：Organizational Unit Name 组织单位名称；
# CN: Common Name 域名
# L：省/市/自治区名称；
# C：国家/地区代码
openssl req -new -key ca.key -out req.csr  -subj "/C=CN/ST=BeiJing/L=BeiJing/O=test/OU=test/CN=*.proxy.domain.com/CN=*.domain.com/CN=domain.com/CN=localhost/emailAddress=zonghengbaihe521@qq.com"

# 使用上一步的证书签名请求签发证书 (certificate)
openssl x509 -req -days 365 -in req.csr -signkey ca.key -out ca.crt

# CA根证书的上述步骤已完成



cp -f ca.key   wildcard.domain.com.key.pem
cp -f ca.crt   wildcard.domain.com.fullchain.pem

exit 0 ;

# 下面自己看参考文档
# 生成私钥（.key）-->生成证书请求（.csr）-->用CA根证书签名得到证书（.crt）
# 服务器端用户证书：


# private key
openssl genrsa -out server.key 2048
# generate csr
openssl req -new -key server.key -out server.csr  -subj "/C=CN/ST=BeiJing/L=BeiJing/O=test/OU=test/CN=*.proxy.domain.com/CN=*.domain.com/CN=domain.com/CN=localhost/emailAddress=zonghengbaihe521@qq.com"

test -d ./demoCA/newcerts  || mkdir -p ./demoCA/newcerts && touch demoCA/index.txt  && touch demoCA/serial  && echo 01 > demoCA/serial

test -f server.crt && rm -f server.crt
# generate certificate
openssl ca -in server.csr -out server.crt -cert ca.crt -keyfile ca.key

openssl rsa -noout -text -in cakey.key



cp -f  server.key wildcard.domain.com.key.pem
cp -f  cacert.pem wildcard.domain.com.fullchain.pem

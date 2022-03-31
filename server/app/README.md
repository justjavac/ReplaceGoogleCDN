## 远程控制 web 服务器


## 浏览器设置cookie
```javascript

document.cookie="auth_token=87deb710-b0d8-11ec-b5e4-8b88891e01b6; Path=/; Domain=domain.com; Expires=Fri, 31 Mar 2023 09:57:30 GMT;"

```

## 远程控制 web 服务器
```shell

curl  -v --compressed  -H "x-auth-token:87deb710-b0d8-11ec-b5e4-8b88891e01b6"  https://master.proxy.domain.com/setup/proxy/start
curl  -v --compressed  -H "x-auth-token:87deb710-b0d8-11ec-b5e4-8b88891e01b6"   https://master.proxy.domain.com/setup/proxy/stop

#  使用自签名时 忽略SSL证书验证
curl  -v --compressed  -H "x-auth-token:87deb710-b0d8-11ec-b5e4-8b88891e01b6"  https://master.proxy.domain.com/setup/proxy/start
curl  -v --compressed  -H "x-auth-token:87deb710-b0d8-11ec-b5e4-8b88891e01b6"   https://master.proxy.domain.com/setup/proxy/stop

# 验证是生效
curl --cookie "auth_token=87deb710-b0d8-11ec-b5e4-8b88891e01b6"  https://github-com.proxy.domain.com

```


## 部署 supervisor  守护  socat-web ； socat-web 执行 shell 脚本
```shell

mkdir -p /etc/supervisor.d/custom/
cp -f supervisord-http-proxy-on-off.conf /etc/supervisor.d/custom/supervisord-http-proxy-on-off.conf

supervisorctl status

supervisorctl update

```
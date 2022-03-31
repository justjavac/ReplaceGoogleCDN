#! /bin/bash

echo -e -n "HTTP/1.0 200\r\n"
echo -e -n "Content-Type:text/html;charset=utf-8\r\n"
echo -e -n "\r\n"
read  MESSAGE
echo "<html><body>"
echo "<xmp>"
echo  "PID: $$"


# echo "$(hostname)"
# echo "$(hostnamectl)"
# hostname
host
#ip a
echo "now is $(date -u)"
cmd=$(echo  "$MESSAGE" | awk '{print $2}' |  awk -F '/' '{print $4}')
echo $cmd
set -eux
__DIR__=$(cd "$(dirname "$0")";pwd)
cd "${__DIR__}"

if [[ -n $cmd ]]  && [[ $cmd = 'stop' ]]
then
  sh stop.sh
fi

if [[ -n $cmd ]]  && [[ $cmd = 'start' ]]
then
  sh start.sh
fi

# docker exec -i nginx-proxy nginx -T
# pwd
docker ps
# netstat -atpn
ls -lh ${__DIR__}/../etc/nginx/conf.d
# ps -ef
# free -m
# df -h -d /
echo "</xmp>"
echo "</body></html>"
echo -e -n "\r\n"

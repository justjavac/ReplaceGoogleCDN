#!/bin/bash
set -exu

__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)
#__ROOT__=$(readlink -f ${__DIR__}/../)
__ROOT__=$(
  cd ${__DIR__}/../
  pwd
)
echo ${__ROOT__}


cd ${__ROOT__}/rules/advance/

if test -f auth.json; then
  des_line_number=$(grep -n 'requestDomains' auth.json | awk -F ":" '{print $1}')
  current_value=$(sed -n "${des_line_number}p" auth.json )
  current_value=$(echo $current_value |  sed 's/[\s|\t|\"]//g')
  # 字符串截取模式匹配
  current_value=${current_value#requetDomain}
  current_value=${current_value#: [}
  current_value=${current_value%],}

  echo $current_value

  new_value='proxy.domain-example.com'

  nums=`grep -rl "$current_value" *.json | wc -l`
  if test $nums -gt 0 ; then
    sed -i "s/${current_value}/${new_value}/g" `grep -rl "$current_value" *.json `
  fi

fi

cd ${__ROOT__}

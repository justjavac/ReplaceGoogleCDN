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
  des_line_number=$(grep -n 'x-auth-token' auth.json | awk -F ":" '{print $1}')
  des_line_number=$(($des_line_number + 2))
  current_value=$(sed -n "${des_line_number}p" auth.json | awk '{print $2}')
  current_value=$(echo $current_value | sed 's/[\t|\"]//g')
  echo $current_value

  # 新的token
  new_value='b11102d8-1086-11ed-99e2-e73543daa618'

  sed -i "s/${current_value}/${new_value}/g" auth.json

fi

cd ${__ROOT__}

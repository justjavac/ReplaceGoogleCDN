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

# GNU Libidn (idn) – 国际化域名命令行工具
# sudo apt install idn

# python3 -c 'import sys;print(sys.argv[1].encode("idna").decode("utf-8"))' "点"
# python3 -c 'import sys;print(sys.argv[1].encode("idna").decode("utf-8"))' "中"

# 交互式
# CHARSET=UTF-8 idn --punycode-encode


old_punycode='_xn--3px_'

new_punycode='_xn--fiq_'


nums=$(grep -rl "$old_punycode" ${__ROOT__}/rules/advance/*.json | wc -l)

if test $nums -gt 0; then

  sed -i "s/${old_punycode}/${new_punycode}/g" $(grep -rl "$old_punycode" ${__ROOT__}/rules/advance/*.json)

fi

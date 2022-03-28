#!/bin/env bash

set -exu

__DIR__=$(cd "$(dirname "$0")";pwd)
cd "${__DIR__}" &&
docker stop nginx-proxy-server
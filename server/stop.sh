#!/bin/env bash

set -eux

__DIR__=$(cd "$(dirname "$0")";pwd)
cd "${__DIR__}" &&
docker start nginx-proxy-server
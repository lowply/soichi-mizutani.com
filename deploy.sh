#!/bin/bash

HOST="vps.fixture.jp"
SRC="bin templates public"
TARGET="/home/www/soichi-mizutani.com/"
find . -name .DS_Store -delete
rsync -av --delete -e 'ssh -l sho -p 1417' ${SRC} ${HOST}:${TARGET}
ssh -p 1417 -l sho ${HOST} "supervisorctl restart soichi-mizutani.com"

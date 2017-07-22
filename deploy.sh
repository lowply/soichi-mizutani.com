#!/bin/bash

rsync -av --delete -e "ssh -l ${SSH_USER} -p ${SSH_PORT}" bin templates public ${HOST}:${TARGET}/
ssh -p ${SSH_PORT} -l ${SSH_USER} ${HOST} "supervisorctl restart ${DOMAIN}"

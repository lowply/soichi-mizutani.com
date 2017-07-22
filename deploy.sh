#!/bin/bash

rsync -i ./deploy_rsa -av --delete -e "ssh -l ${SSH_USER} -p ${SSH_PORT}" bin templates public ${HOST}:${TARGET}/
ssh -i ./deploy_rsa -p ${SSH_PORT} -l ${SSH_USER} ${HOST} "supervisorctl restart ${DOMAIN}"

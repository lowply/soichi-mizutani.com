#!/bin/bash

gpg -qd env.gpg > env

. ./env

for V in "${SSH_USER}" "${SSH_PORT}" "${HOST}" "${TARGET}" "${CMD}"; do
	[ -z "${V}" ] && { echo "One or more variable is empty"; exit 1; }
done

rsync -av --delete -e "ssh -l ${SSH_USER} -p ${SSH_PORT}" bin templates public ${HOST}:${TARGET}/
ssh -p ${SSH_PORT} -l ${SSH_USER} ${HOST} "${CMD}"

rm ./env

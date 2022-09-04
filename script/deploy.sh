#!/bin/bash

find . -name .DS_Store -delete -exec echo removed: {} \;

az storage blob sync \
    --account-name soichi \
    --source ./public \
    --container '$web' \
    --exclude-path assets \
    --delete-destination true

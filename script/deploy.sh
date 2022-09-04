#!/bin/bash

find . -name .DS_Store -delete -exec echo removed: {} \;

az storage blob sync \
    --source ./public \
    --container '$web' \
    --exclude-path assets \
    --delete-destination true

#!/bin/bash

find . -name .DS_Store -delete -exec echo removed: {} \;

az storage blob sync \
    --source ./static/assets \
    --container '$web/assets' \
    --delete-destination true

#!/bin/bash

find . -name .DS_Store -delete -exec echo removed: {} \;

aws s3 sync \
    --exclude "assets/*" \
    --delete \
    ./public/ s3://soichi-mizutani.com/

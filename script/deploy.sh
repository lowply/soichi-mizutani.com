#!/bin/bash

aws s3 sync \
    --exclude "*.DS_Store" \
    --exclude "assets/*" \
    --delete \
    ./public/ s3://soichi-mizutani.com/

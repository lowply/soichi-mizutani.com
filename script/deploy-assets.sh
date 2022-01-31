#!/bin/bash

aws \
    --profile soichi-mizutani.com \
    s3 sync \
    --exclude "*.DS_Store" \
    --delete \
    ./static/assets/ s3://soichi-mizutani.com/assets/

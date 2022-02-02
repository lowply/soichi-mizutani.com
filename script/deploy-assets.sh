#!/bin/bash

find . -name .DS_Store -delete -exec echo removed: {} \;

aws \
    --profile soichi-mizutani.com \
    s3 sync \
    --delete \
    ./static/assets/ s3://soichi-mizutani.com/assets/

#!/bin/bash

find . -name .DS_Store -delete
aws --profile assets.soichi-mizutani.com s3 sync --delete ./assets/ s3://assets.soichi-mizutani.com/

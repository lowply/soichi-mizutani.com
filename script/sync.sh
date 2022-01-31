#!/bin/bash

# aws --profile assets.soichi-mizutani.com s3 sync --delete ./assets/ s3://assets.soichi-mizutani.com/
aws --profile soichi-mizutani.com s3 sync --exclude "*.DS_Store" --delete ./public/ s3://soichi-mizutani.com/

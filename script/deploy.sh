#!/bin/bash

find . -name .DS_Store -delete -exec echo removed: {} \;

npm run deploy

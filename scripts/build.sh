#!/usr/bin/env bash
#
# Build a distributable version of the project
rimraf dist
tsc
bun build --bundle --minify src/index.tsx --outfile dist/index.js --target node
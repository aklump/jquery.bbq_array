#!/bin/bash
# 
# @file
# Copy distribution files to /dist
# 
# Allow time for all CodeKit to minify.
while [ ! -f "$7/jquery.bbq_array.min.js" ]; do
  sleep 1
done

test -d "$7/dist" || mkdir -p "$7/dist"
cp "$7/jquery.bbq_array.js" "$7/dist/"
cp "$7/jquery.bbq_array.min.js" "$7/dist/"
cp "$7/README.md" "$7/dist/"

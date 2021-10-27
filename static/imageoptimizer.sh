#!/bin/bash
rsync -a images/ .imgbackup
find images/ *.png -exec optipng {} \;
find images/ *.{jpeg,jpg} -exec jpegoptim {} \;

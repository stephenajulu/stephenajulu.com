#!/bin/bash
rsync -a images/ .imgbackup
find images/ *.png -exec optipng {} \;
find images/ *.{jpeg,jpg} -exec jpegoptim {} \;
find images/ *.gif -exec gifsicle --batch --optimize {} \;
find images/ *.svg -exec svgo {} \;
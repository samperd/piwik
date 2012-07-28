#!/bin/sh

LATEST=`curl -s http://api.piwik.org/1.0/getLatestVersion/`
curl -s http://builds.piwik.org/piwik-$LATEST.tar.gz | gunzip | tar xf -
mv piwik Piwik/www

sed "s/{{VERSION}}/$LATEST/" <config.json.tpl >Piwik/CONTROL/config.json
cp ../../gpl-3.0.txt Piwik/CONTROL/license.txt

sh apkg_build Piwik

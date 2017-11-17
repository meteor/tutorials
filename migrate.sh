#!/bin/sh

git rm content/step00.html
git commit -m 'Remove Step00.html.'

git mv content/ source/

git commit -m 'Move content to source.'

perl -0777 -p -i'' -e 's/^#(?!#)\s*([A-Z].+?)$/---\ntitle: $1\n---/m' source/*/*.md
git add source/
git commit -m 'Change titles.'

perl -p -i'' -e 's/\{\{#\s*template.+\}\}\n$//' source/*/*.md
perl -p -i'' -e 's/\{\{\/template\}\}\n$//' source/*/*.md
perl -p -i'' -e 's/\{\{>\s*(.+)\s*\}\}/> TODO:INCLUDE: $1/' source/*/*.md
perl -p -i'' -e 's/\{\{#\s*(.+)\s*\}\}/> TODO:BLOCKOPEN: $1/' source/*/*.md
perl -p -i'' -e 's/\{\{\/\s*(.+)\s*\}\}/> TODO:BLOCKCLOSE: $1/' source/*/*.md
git add source/

git commit -m 'Change tags to TODOs.'

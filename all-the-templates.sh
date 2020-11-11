#!/bin/bash
set -e

repo=$1
github_user=$(git config user.name)
prefix=create-snowpack-app/app-template-

git init $repo && pushd $repo > /dev/null
    git checkout -b master
    git remote add origin https://github.com/$github_user/$repo
    cp ../all-the-templates.sh .
    git add . && git commit -am "all-the-templates.sh"
    cat << __EOF__ > README.md
# $repo [github pages](https://$github_user.github.io/$repo/)

This repo was created by running the included all-the-templates.sh

- created empty repo $repo using the github web site
- cloned snowpack - cd snowpack - yarn - yarn build
- obtained all-the-templates.sh
- ./all-the-templates.sh $repo
- cd $repo
- git push --set-upstream origin master
- github pages were set to *branch master* and *folder docs* in **[settings](https://github.com/$github_user/$repo/settings)**
__EOF__
    git add . && git commit -am "readme"
    mkdir docs && pushd docs > /dev/null
        touch .nojekyll
        cat << __EOF__ > index.html
<html>
  <h1>$repo <a href=https://github.com/$github_user/$repo/blob/master/README.md>github readme</a></h1>
  <ul>
  </ul>
</html>
__EOF__
        git add . && git commit -am "github pages - docs/ - .nojekyll index.html"
    popd > /dev/null
    mkdir docs-src && pushd docs-src > /dev/null
#       for template_folder in ../../${prefix}react ; do # ../../${prefix}svelte  ../../${prefix}vue ; do
        for template_folder in ../../$prefix* ; do
            name=${template_folder#../../$prefix}
            npx create-snowpack-app $name --template $template_folder && pushd $name > /dev/null
                rm -rf .git
                sed -i "/buildOptions/a\\    out: '../../docs/$name'" snowpack.config.js
                sed -i "/buildOptions/a\\    baseUrl: \\'/$repo/$name\\'," snowpack.config.js
                git add . && git commit -am "docs-src/$name"
                npm run build
                git add ../../docs && git commit -am "npm run build -> docs/$name"
                sed -i "/<\\/ul>/i\\      <li><a href=$name>$name</a></li>" ../../docs/index.html
                git add ../../docs && git commit -am "update docs/index.html with $name"
            popd > /dev/null
        done
    popd > /dev/null
popd > /dev/null

echo
echo
echo now ...
echo create empty repo $github-user/$repo using github
echo cd $repo
echo git push --set-upstream origin master
echo go to repo settings and enable github pages branch=master and folder=/docs

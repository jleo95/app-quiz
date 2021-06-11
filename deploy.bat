
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/jleo95/computer-quiz.git master:gh-pages

cd -

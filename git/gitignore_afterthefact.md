##How to retroactively **.gitignore** files/folders

1. do a regular commit to make sure your repo is up to date.
2. add files/folders to your **.gitignore** file
3. now run this: `git rm -r --cached .`
4. then run this: `git add .`
5. then run this: `git commit -m ".gitignore updated"`
6. lastly run this: `git push`

more info: http://stackoverflow.com/questions/1139762/ignore-files-that-have-already-been-committed-to-a-git-repository

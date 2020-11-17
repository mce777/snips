## How to retroactively **.gitignore** files & folders

1. check and **make sure your repo is up to date**!
2. add files/folders to your **.gitignore** file
3. now run: `git rm -r --cached .`
4. then run: `git add .`
5. then run: `git commit -m "fix: gitignore updated"`
6. lastly, run this: `git push`

Source:
http://stackoverflow.com/questions/1139762/ignore-files-that-have-already-been-committed-to-a-git-repository

## case 1: merge your new branch into the 'master' branch
1. push your branch
2. switch to master
3. run `git rebase nameoffeaturebranch`

## case 2: merge 'master' branch into your existing feature branch
1. cuz sometimes you fall behind and need to pull some new stuff in 
2. make sure the master branch is up to date (do a git pull)
3. go back to your feature branch
4. run `git rebase master` (note: -i flag makes it interactive)

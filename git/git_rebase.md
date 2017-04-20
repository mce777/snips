## Merge your new branch into the 'master' branch
1. push your branch
2. switch to master
3. run `git rebase nameoffeaturebranch`

## Merge 'master' branch into your existing feature branch
1. make sure the master branch is up to date (do a git pull)
2. go back to your feature branch
3. run `git rebase master` (note: -i flag makes it interactive)

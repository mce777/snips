You want to unstage the commits you made, to resort the individual changes for example.

1. run `git reset --soft HEAD~6` (or `master` instead of `HEAD~6`) and all the changes you made with the last 6 commits will show up locally as 'unstaged'. The optional `--soft` **won't mess with what you have going on locally**.
2. If there are files you *don't want* in your commit(s), then run a `git reset nameOfFile`. The reset run in the previous step will ensure that the file resets to *that* version (eg. the version on master). 
2. run `git add whateverfile` and `git commit -m "commit msg"` however many times you need.
3. run `git push --force-with-lease` when you're all done.

Note: this is not all the different from interactive rebasing, but with the added flexibility of being able to redo the commits at a more detailed level.

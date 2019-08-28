You want to unstage the commits you made, to resort the individual changes for example.

1. run `git reset HEAD~6` and all the changes you made with the last 6 commits will show up locally as 'unstaged'
2. run `git add whateverfile` and `git commit -m "commit msg"` however many times you need.
3. run `git push --force-with-lease` when you're all done.

Note: this is not all the different from interactive rebasing, but with the added flexibility of being able to redo the commits at a more detailed level.
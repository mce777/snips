### To cherry-pick all the commits from commit A to commit B (where A is older than B)
`git cherry-pick A^..B`

### If you want to ignore A itself
`git cherry-pick A..B`

... if you run into conflicts, fix them (obviously), then run `git cherry-pick --continue`

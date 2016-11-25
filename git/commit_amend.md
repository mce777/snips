You want to make some small additions to a **git commit** you just made?

1. run `git add --all` or `git add specificFile`
2. run `git commit --amend --no-edit`, assuming you do not want to change the commit msg.
3. run `git push -f`. That's it, but note that you are using a **force push** here, and not the cool Jedi kind. If it's your branch, no problem. If it's not then talk to your collaborators. When in doubt, just do a new commit.

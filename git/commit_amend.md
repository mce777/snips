## want to make additions to a **git commit** you just made?

1. run `git add --all` or `git add specificFile`
2. run `git commit --amend --no-edit`, *assuming* you do not want to change the commit msg.
3. run `git push --force-with-lease`

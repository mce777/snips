### Reverting
- find the commit you want to revert and copy the commit hash#
- `git revert abc123commithashery`, then push.
- this revert will generate a new commit
  - to 'revert the revert' just run `git revert hashofnewrevertcommit123`
  - or create a new branch first, and then run the above and make the "reapply" an MR.   

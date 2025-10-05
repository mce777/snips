You don't need to cherry-pick all the commits. 

Just cherry-pick the merge-commit.

- Option 1: copy the merge-commit hash and cherry-pick it locally in the terinal.
    - you may need to use the parent option (see below)
- Option 2: do it via the Gitlab UI. This creates a merge-request out of the cherry-pick.
    - quite handy. Used it recently when cherry-picking into the latest SCIP-Release
    - once your ticket has been merged, the `cherry-pick` button becomes available
        - you have the option to do a straight cherry-pick or have it be a MR.

FYI

The way a cherry-pick works is by taking the diff a changeset represents (the difference between the working tree at that point and the working tree of its parent), and applying it to your current branch.

So, if a commit has two or more parents, it also represents two or more diffs - which one should be applied?

You're trying to cherry pick fd9f578, which was a merge with two parents. So you need to tell the cherry-pick command which one against which the diff should be calculated, by using the -m option. For example, 
`git cherry-pick -m 1 fd9f578` to use parent 1 as the base. Usually `-m 1` is the right parent.

I can't say for sure for your particular situation, but using git merge instead of git cherry-pick is generally advisable. When you cherry-pick a merge commit, it collapses all the changes made in the parent you didn't specify to -m into that one commit. You lose all their history, and glom together all their diffs. Your call.
https://stackoverflow.com/questions/9229301/git-cherry-pick-says-38c74d-is-a-merge-but-no-m-option-was-given
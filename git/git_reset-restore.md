## Hard Reset
You're best off doing it like this:
`git reset --hard origin/name-of-branch`

This way, you're being explicit and there is little doubt as to what you're resetting to.

## Restore
`git restore fileName.xyz`

... or if you've already branched off:

`git restore --source <branch-to-restore-from> <file-path>`

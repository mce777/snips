perfect for editor settings that you basically **never** want to check in.

1. in your user root (eg `/Users/username`) create `.gitignore_global`
2. run this `git config --global core.excludesfile ~/.gitignore_global` so git knows about the file.
3. while you're there, take a look at the other config files with `ls -a` (optional of course)

https://help.github.com/articles/ignoring-files/#create-a-global-gitignore

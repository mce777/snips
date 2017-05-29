##Showing (or hiding again) hidden files in Finder##

By default, Finder hides certain filetypes (e.g. .git, .babelrc).

To show them in Finder, enter the following in the terminal:

1. `defaults write com.apple.finder AppleShowAllFiles YES`
2. `killall Finder`


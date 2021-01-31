## NVM (Node Version Manager) fresh install

1. `brew update`
2. `brew install nvm`
3. `mkdir ~/.nvm` (in your user root, if it's not already there)

Then add these two lines in your ~/.zshrc: 
```
# required for nvm
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

To be able to use nvm in your current shell: `source ~/.zshrc`

If permission is denied, this may help:<br>
`sudo chown -R $(whoami):admin /usr/local/* && sudo chmod -R g+rwx /usr/local/*`

## NVM (Node Version Manager) fresh install

1. brew update
2. brew install nvm
3. mkdir ~/.nvm

Then add these two lines in your ~/.zshrc: 
```
# required for nvm
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```

If permission is denied, this may help:
`sudo chown -R $(whoami):admin /usr/local/* && sudo chmod -R g+rwx /usr/local/*`

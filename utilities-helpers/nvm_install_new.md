## NVM (Node Version Manager) fresh install

This is the new config for ohmyzsh (.zshrc) that was needed after the update to Mac OS Monterey (April 2022)

1. `brew update`
2. `brew install nvm`
3. `mkdir ~/.nvm` (in your user root, if it's not already there)

### The following block goes into your .zshrc file
```
# Load nvm
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Add the lines below if you'd like nvm to be loaded automatically when you open a terminal
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

source: https://gist.github.com/cooperwfloyd/51ce7748dba37d14dbabf5e942a2b4bb

### Additionally needed this (11/2022)
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh`

https://bobbyhadz.com/blog/nvm-command-not-found

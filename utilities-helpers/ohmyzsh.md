How to install the **oh my ZSH** command line thingy with all those nice keyboard shortcuts and pretty colors.

## Installation
1. install **Homebrew** if it's not already installed
2. make **zsh** the default shelll: https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH
3. install **oh-my-zsh** on top of it: https://github.com/robbyrussell/oh-my-zsh ("Getting Started" >> "Basic installation")

## Plugins
run this: `nano ~/.zshrc`

Edit this line to make plugins available to you:
`plugins=(git node nvm npm zsh-syntax-highlighting)`

**ZSH-Syntax-Highlighting (requires extra step)**: https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md (see the oh-my-zsh section).

More plugins here: https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins

#### Shortcuts
# Example aliases
alias nvim=lvim
alias zshconfig="nvim ~/.zshrc"
alias zshreload='source ~/.zshrc'

# custom git
alias fwl='git push --force-with-lease'
alias fdx='git clean -fdx'
alias mmm='git commit -m'
alias pull='git pull'
alias prune='git fetch --prune'
alias gcane='git commit --amend --no-edit'
alias cont='git rebase --continue'
alias abort='git rebase --abort'
alias ddd='git branch -D'
alias pullpop='git stash && git pull && git stash pop'
alias soft='git reset --soft HEAD^'

# other stuff
alias ipme='echo "assuming wireless connnection" && ipconfig getifaddr en0'
alias py='python3'
alias viteme='yarn create vite'

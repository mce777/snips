### gitconfig setup
- create a .gitconfig file in your user root directory or run the following:
```
git config --global user.name "John Doe"
git config --global user.email "example@email.com"
git config --global http.sslVerify "false"
```

### Create a public/private key pair
Check [this](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) out for detailed instructions.
- TL;DR: run `ssh-keygen -t ed25519 -C "your_email@example.com"` to create key, unless you already have one.
  - double check to ensure that the above is still the recommended encrytion standard 

### Add the SSH key to your Github Account
1. In your MacOS Terminal, run the following command to copy the key to your clipboard
`pbcopy < ~/.ssh/id_ed25519.pub`
   - assuming _that_ is the name of your file. 
2. Log into your Github/Gitlab/etc account and navigate to `Settings > SSH and GPG Keys`.
3. Click `New SSH Key`
4. Paste the code in the textbox and click `Add SSH Key`

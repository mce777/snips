# Creating a new repo on Github

## On your machine
1. create a new folder and **cd** to it in the terminal

2. `git init .`

3. `git add --all`

4. `git commit -m "initial commit"`

## On Github   

1. Go to `Repositories` and create a new repo (chose SSH option if you can)

2. Find the section `... or push existing repository from cmd-line` and run those commands:
```
git remote add origin git@github.com:xyzgitprofile/your-new-repo.git
git branch -M main
git push -u origin main
```

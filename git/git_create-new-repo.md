# Creating a new repo on Github

## On your machine
1. create a new folder and **cd** to it in the terminal (or **cd** into an existing one).

2. `git init .`

3. `git add --all`

4. `git commit -m "initial commit"`

## On Github   

1. Go to `Repositories` and create a new repo (chose SSH option if you can)

2. click on `create new repository` (note: this used to be all on the same page, but now it's on the _next_ page)

3. Find the section `... or push existing repository from cmd-line` and run (copy-pasta 🍝) these commands:
```
git remote add origin git@github.com:xyzgitprofile/your-new-repo.git
git branch -M main
git push -u origin main
```

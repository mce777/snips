**Why?**

You could just include the file/library/gem/etc in your directory, but...
 
"The issue with including the library is that it’s difficult to customize the library in any way and often more difficult to deploy it, because you need to make sure every client has that library available. The issue with vendoring the code into your own project is that any custom changes you make are difficult to merge when upstream changes become available."

https://git-scm.com/book/en/v2/Git-Tools-Submodules

**Cloning a project with a submodule in it**

`git submodule init`

`git submodule update`

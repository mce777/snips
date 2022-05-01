`uncss` is a nice tool which you can use from the command line:
https://github.com/uncss/uncss

But it doesn't seem to minify the file. For that you can use `purifycss`, which is not quite as good at eliminating unused CSS as `uncss`, but it will minify your css, reducing file size even more. 
https://github.com/purifycss/purifycss

both can be run from the command line. You can also make one or both tools part of your build process by including them in your `package.json`.

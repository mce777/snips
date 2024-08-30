## Can you get the number of lines of code from a GitHub repository?

You can run something like

`git ls-files | xargs wc -l`

Which will give you the total count!

You can also add more instructions. Like just looking at the JavaScript files.

`git ls-files | grep '\.js' | xargs wc -l`

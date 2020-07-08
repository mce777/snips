## what exactly is the virtual DOM?

virtual DOM << -- >> actual DOM<br>
blueprints << -- >> actual building<br>

Updating via virtual DOM like making changes in building by comparing before and after blueprints and only changing what’s different, instead of tearing everything down and rebuilding.

Under the hood, Vue compiles templates into Virtual DOM render functions.

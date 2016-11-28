Work in progess...

**Babel needs the following to deal with ES6 classes**

`npm install --save-dev babel-plugin-syntax-class-properties`

`npm install --save-dev babel-plugin-transform-class-properties`

<pre>
{
  "plugins": ["syntax-class-properties", "transform-class-properties"]
}
</pre>

**You're gonna want to create some "react-to-typescript-definitions"**

Typings, remember those? Anyway, install this:

`npm install react-to-typescript-definitions --save-dev`

https://www.npmjs.com/package/react-to-typescript-definitions

Ok, now it's probably not a bad idea to create a shell script (eg `whatever.sh`) because you most likely have a few components that need defs. It looks something like this:

<pre>
#!/bin/sh

cat ./lib/components/atoms/button/Button.jsx | ./node_modules/.bin/react2dts --name "currstyles/lib/components/atoms/button/Button" >> ./components.d.ts
</pre>

Just add a new line for each additional component. When you're done, run `./createTypings.sh`. This will spit out the result here: `components.d.ts` (or whatever file you specified in the shell script). 

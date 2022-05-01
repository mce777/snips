http://eslint.org/docs/user-guide/getting-started

##Installation

`npm install eslint --save-dev`

config setup: `./node_modules/.bin/eslint --init`

In the terminal, select **Answer Questions...** and follow the instructions. At the end you will have `.eslintrc.json` config file set up for you (and if you answer the questions properly, things like the 'React' pluggin will be installed for you).

In the `package.json`, under **Scripts**,  add `"lint:js": "./node_modules/.bin/eslint ./lib/components/**/*.js"`

##Configuration Details
eslint has some issues with React, so add this to the config file:
<pre>
 "rules": {
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2
  }
</pre>

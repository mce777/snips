##So that Node modules written in TypeScript will work
Better not to install Typescript globally. But this means you need to configure and install dependencies so that your stuff will work when you run **npm build**

**run this for node-->** ./node_modules/.bin/typings install env~node --save --global  

**run this for mocha-->** ./node_modules/.bin/typings install env~mocha --save --global

**run this for chai-->**./node_modules/.bin/typings install npm~chai --save

Other examples and more info here: https://github.com/typings/typings

**If the installation is not successful, check the details of the error message.

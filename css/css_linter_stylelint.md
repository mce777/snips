##Basic Installation
First, install stylelint `npm install stylelint --save-dev`

Then, then a standard config
`npm install stylelint-config-standard --save-dev`

##Config Setup
Now create the file `.stylelintrc.json` and copy/paste the following which will hook up the standard config:

```{
  "extends": "stylelint-config-standard"
}```

*Note: you can add, and probably should add custom rules after this (see 'rules' link below).*

**Not quite hooked up yet!** In your `package.json`, find the "scripts" and add the following line (in this example ./lib/components/all-folders/all-files-with.css):

`"lint:style": "stylelint './lib/components/**/*.css'"`

##Links
http://stylelint.io/user-guide/configuration/

https://github.com/stylelint/stylelint-config-standard

http://stylelint.io/user-guide/rules/


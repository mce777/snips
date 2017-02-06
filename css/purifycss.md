##Using purifycss

Easiest way (less than a minute): install it on the command line

`npm install -g purify-css`

Then run something like this...

`purifycss src/css/main.css src/js/main.js --min --info --out src/dist/index.css`

In other words...

`purifycss cssyouwanttocheck.css occurancesinthisfile.hmtl --min --info src/dist/outputfile.css`

You can also run it on multiple css files at once. Just add the file(s) with a space BEFORE the `occurancesinthisfile.html`.

More info here: https://github.com/purifycss/purifycss

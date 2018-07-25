`npm ls <package-name>`

Example: you get the message **Known high severity security vulnerability detected in parsejson <=0.0.3 defined in package-lock.json.** 

parsejson is not in your package.json directly. After running `npm ls parsejson` you see that it is a dependency of **webpack-dashboard**

run `npm update --save-dev webpack-dashboard` and you're good to go (package-lock.json is updated automatically).

// display and capture input in the command line

import * as readline from "readline";

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What do you think? ", function(answer) {
    console.log("Thank you for your valuable feedback:", answer);
    rl.close();
});

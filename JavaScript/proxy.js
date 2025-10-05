const target = {
    message1: "hello",
    message2: "everyone",
};

const handler3 = {
    get(target, prop, receiver) {
        // if (prop === "message2") {
        //   return "world";
        // }
        return `${target[prop]} random123`;
    },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); //  hello random123
console.log(proxy3.message2); //  everyone random123


// see also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

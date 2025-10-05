// coming in via props for example
const theIncomingObject = { a: 1, b: 2, c: 3 };

const theMappedObject = Object.fromEntries(
    Object.entries(theIncomingObject)
        .map(([ key, val ]) => [ key, val+1 ])
);

console.log(theMappedObject)

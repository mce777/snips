// generates a nice long random value (or in nerd-speak, an "RFC 4122 Version 4 UUID").

// need to require it here to run in node. In the browser it's just available
const crypto = require('crypto')

const example = crypto.randomUUID()

console.log('value:::', example)

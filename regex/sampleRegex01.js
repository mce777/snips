var sample = 'Anleihen Euro, > 3 Jahre++';
var sampleMod = sample.replace(/[\s+,]/g, '').toLowerCase().replace(/>/g, 'gt').replace(/</g, '-')
console.log(sampleMod); // result: anleiheneuro3jahre

// g means global, ie not just the first instance

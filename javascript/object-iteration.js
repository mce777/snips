for (var key in object) {
	// check key is object of property and not prototype
	if (object.hasOwnProperty(key)) {
		// use the key to get the value from the object
		console.log(object[key]);
	}
}

// or this...
Object.entries(object).forEach(item => {
	// item is an array of the object property's key and value
	console.log(item[1])
})

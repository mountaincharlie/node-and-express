// Modules

// requiring from other modules
const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-exports');
console.log(data)


sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
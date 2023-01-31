// path - built in module so no installation or direct path required

const path = require('path');

console.log(path.sep);

// creates normalised path to the txt file inside content dir inside subdir
const pathToTextFile = path.join('/content', 'subdir', 'text.txt')
console.log(pathToTextFile);

// just returns the base file name
const base = path.basename(pathToTextFile);
console.log(base);

// returns an absolute path (__dirname is a global var for the dir of the current file)
const absolute = path.resolve(__dirname, 'content', 'subdir', 'text.txt');
console.log(absolute);

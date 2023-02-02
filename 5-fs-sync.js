// FS sync

// destructuring to get the 'readFileSync' from fs
const {readFileSync, writeFileSync} = require('fs');

// reading - path and encoding
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

// creating a new file - filename and value [overwrites the file if already exists]
// to append - use the optional object with 'flag' argument (appends on every run)
writeFileSync('./content/result-sync.txt', `Here is the new result: ${first}, ${second}`, {flag:'a'})

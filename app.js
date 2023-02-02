// npm - global command

// install package LOCALLY [only on this project]
// npm i <packageName>

// install package GLOBALLY [for use in any project]
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac/linux)

// package.json - stores important info about the project (like requirements.txt)
// npm init => asks setup Qs one by one
// npm init -y => sets up with all default settings

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);


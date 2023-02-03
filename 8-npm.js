// npm - global command

// install package LOCALLY [only on this project]
// npm i <packageName>

// install package GLOBALLY [for use in any project]
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac/linux)

// package.json - stores important info about the project (like requirements.txt)
// npm init => asks setup Qs one by one
// npm init -y => sets up with all default settings

// install dependencies only for dev mode:
// npm i <packageName> -D
// installs it in a devDependencies object in package.json
// packages in this object only are used in dev mode

// using 'scripts' object in package.json
// "start":"node app.js" => use 'npm start' to run the 'node app.js' command
// "dev":"nodemon app.js" => use 'npm run dev' to run the 'nodemon app.js' command
// [nodemon is a package which allows the code to keep running in the terminal and respond to changes in the code without having to ctrl+C and re-run it]

// to uninstall:
// npm uninstall <packageName>
// OR delete (nuke) all the node_modules and package-lock.json files and remove from dependencies and then run: npm install to reinstall the dependencies remaining in the list

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("hi guys");


// Async patterns - promises simple version

const {readFile, writeFile} = require('fs').promises;  // readFile and writeFile will return promises now

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');  
        const second = await readFile('./content/second.txt', 'utf8');  // (path, encoding)
        await writeFile('./content/async-patterns-result.txt', `This is an async patterns message: ${first} ${second}`);  // (path, data to write in)
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();


// ----- USING UTIL'S PROMISIFY VERSION

// const util = require('util');  // to use the promisify method
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8');  
//         const second = await readFilePromise('./content/second.txt', 'utf8');  // (path, encoding)
//         await writeFilePromise('./content/async-patterns-result.txt', `This is an async patterns message: ${first} ${second}`);  // (path, data to write in)
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// }

// start();

// -----


// ----- FULL EXPLANATION OF PROMISES VERSION

// creating a function which returns a promise which contains a callback function
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         // readFile(path, encoding, callback(error, result))
//         readFile(path, 'utf8', (err,data) => {
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// // returns a promise => we can chain a 'then'
// // getText('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err))

// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt');  // wait for the promise returned by getText
//         const second = await getText('./content/second.txt');  // wait for the promise returned by getText
//         console.log(first, second);
//     } catch (error) {
//         console.log(error);
//     }
// }

// start();

// -----

// FS async

// destructuring to get the 'readFileSync' from fs
const {readFile, writeFile} = require('fs');

// the below is slightly messy with nesting callback functions (see 13-async-patterns)

// runs a callback function when the function is done (like adding an ev listener)
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(`there was an error:`, err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(`there was an error:`, err)
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the new result: ${first}, ${second}`,
        {flag:'a'}, 
        (err, result)=>{
            if(err){
                console.log(`there was an error:`, err)
                return
            }
            console.log(result);
        })
    })
})

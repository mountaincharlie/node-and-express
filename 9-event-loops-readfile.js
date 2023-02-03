// Event loops - readFile e.g.

const {readFile} = require('fs')

console.log('start first task')
// check file path
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})
console.log('start next task')  // comes second since readFile is async and the callback isnt run until the rest of the code is (its been 'off-loaded')
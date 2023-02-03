// Event loops - server e.g.

const http = require('http')

// is async and so is 'off-loaded' and also waits for triggers to invoke the callback function
const server = http.createServer((req,res) => {
    console.log('request event')
    res.end('Hello world')
})

server.listen(4567, () => {
    console.log('Server listening on port : 4567...')
})

// Events - request event

const http = require('http');

// const server = http.createServer((req,res) => {
//     res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()  // http.Server emits a 'request' event

// server is listening for the 'request' event
server.on('request', (req,res) => {
    res.end('Welcome')
})

server.listen(4567);
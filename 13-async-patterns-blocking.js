// Async patterns

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        // if you had a nested for loops here performing a task, it would slow down the requests to other pages as well as to the about page
        res.end('About Page')
    }
    res.end('Error Page')

})

// how to listen on a port
server.listen(4567,() => {
    console.log('server listening on port 4567...');
})
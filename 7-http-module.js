// HTTP module - built in module so no installation or direct path required

const http = require('http');

// creating server with createServer which looks for a callback function
// the callback takes object arguments 'request' and 'response'
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to the homepage')
    }
    if(req.url === '/about'){
        res.end('Welcome to the about page')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Looks like we can't seem to find the page you're looking for</p>
    <a href="/">Take me home</a>
    
    `)
});

// setting port 4567
server.listen(4567);
// Streams

// Writable, Readable, Duplex and Transform
// We can use events on streams
// good for working with large amounts of data in chunks

const { createReadStream } = require('fs');  

// createReadStream creates an instance of fs.ReadStream which extends stream.Readable
// stream.Readable has an event type 'data'

// the default buffer size is 64kb
// the last buffer is the remainder 
// highWaterMark - example option which controls the size of the buffer
// encoding - option which sets the encoding

// createReadStream('path', { options })
const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'});

// creating a listener for the 'data' event (the callback function param can be called anything)
stream.on('data', (result) => {
    console.log(result)
});

// also has an 'error' event
stream.on('error', (err) => {
    console.log(err)
})


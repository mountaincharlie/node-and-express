// Streams - http example

var http = require('http');
var fs = require('fs');

// aternate way to set up the server
http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    // alternate way for dealing with large amounts of data
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res)  // pipe pushes from readStream into writeStream
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })

}).listen(4567)

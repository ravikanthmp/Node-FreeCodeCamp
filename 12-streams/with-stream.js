const http = require('http');
const {createReadStream}  = require('fs')

const bigfilePath = "./sample/subfolder/bigfile.txt";
const server = http.createServer();

server.on("request", (req, res) => {

    /*
    highWaterWork - buffer size  let readStream = createReadStream(bigfilePath, {highWaterWork : 90000});
    encoding - utf-8
     */
    let readStream = createReadStream(bigfilePath);

    readStream.on('error', (err) => {
        res.end(`Error is ` + err)
    })

    readStream.on('open', (buffer) => {
        readStream.pipe(res)
    } )

})

server.listen(5000,() => console.log("server started on port 5000"))
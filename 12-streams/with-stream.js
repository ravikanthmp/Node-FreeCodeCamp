const http = require('http');
const {createReadStream}  = require('fs')

const bigfilePath = "./../sample/subfolder/bigfile.txt";
const server = http.createServer();

server.on("request", (req, res) => {

    let readStream = createReadStream(bigfilePath);

    readStream.on('error', (err) => {
        res.end(`Error is ` + err)
    })

    readStream.on('open', (buffer) => {
        readStream.pipe(res)
    } )

    readStream.on('end', () => res.end('END!'))

})

server.listen(5000,() => console.log("server started on port 5000"))
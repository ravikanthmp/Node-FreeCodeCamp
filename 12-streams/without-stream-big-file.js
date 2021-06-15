const http = require('http');
const server = http.createServer();
const {readFileSync, writeFileSync, writeFile}  = require('fs')

const bigfilePath = "./sample/subfolder/bigfile.txt";

// create  a big file > 1MB size

for(let i = 0; i < 100000; i++){
    writeFileSync(
        bigfilePath,
        `Hello there ${i}\n`,
        {flag : 'a'}
    )
}

const doStuff = () => {
    return readFileSync(bigfilePath, 'utf-8');
}

server.on('request', (req, res) => {

    if(req.url === "/"){
        const bigFileContents = doStuff();
        console.log(`size of resp is ` + bigFileContents.length)
        res.end(bigFileContents)

        /*

        Connection: keep-alive
        Content-Length: 1790380
        Date: Sun, 25 Apr 2021 20:56:11 GMT
        Keep-Alive: timeout=5

        took 700ms
         */
    }
    
}
)
server.listen(5000)
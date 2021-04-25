const http = require('http');


var req = 0;

// when a request comes in, the event loop picks up the callback
const server = http.createServer((req, res) => {
    setTimeout( () => {
        console.log("done processing request " + req++)
        res.end("done processing request ");
    } , 2000)
})


// starts a process that runs forever (until killed)
server.listen(5000, () => {
    console.log(`server started on port 5000`)
})
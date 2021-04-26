const http = require('http')

let server = http.createServer();
server.on('request', (req, res) => {
    console.log(req);
    res.end("vkjbf")
})

server.listen(5000, () => console.log(`server started on port 5000`))


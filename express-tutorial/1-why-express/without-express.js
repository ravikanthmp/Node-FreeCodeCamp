const http = require('http')

let server = http.createServer();
server.on('request', (req, res) => {

    console.log(req.method);
    console.log(req.url);

    if (req.url === "/about"){
        res.writeHead(200, {'content-type' : "text/html"})
        res.write('<p>About</p>')

    }else{
        res.writeHead(404, {'content-type' : "text/html"})
        res.write('<p>Not Found</p>')
    }


    res.end();
})

server.listen(5000, () => console.log(`server started on port 5000`))


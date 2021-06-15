const http = require('http');
const fs = require('fs')
const indexFile = fs.readFileSync("./navbar-app/index.html", 'utf-8')
const css = fs.readFileSync("./navbar-app/styles.css", 'utf-8')
const js = fs.readFileSync("./navbar-app/browser-app.js", 'utf-8')
const svg = fs.readFileSync("./navbar-app/logo.svg", 'utf-8')

const server = http.createServer( (req, res) => {

    if(req.url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.end(indexFile)
    }else if(req.url === '/styles.css'){
        res.writeHead(200, {'content-type' : 'text/css'})
        res.end(css)
    }else if(req.url === '/logo.svg'){
       res.writeHead(200, {'content-type' : 'image/svg+xml'})
       res.end(svg)
    }else if(req.url === '/browser-app.js'){
        res.writeHead(200, {'content-type' : 'text/javascript'})
        res.end(js)
    }else if(req.url === '/about'){
        res.end(" Get out")
    }else{
        res.end(" Get out 2")
    }

})
server.listen(5000)

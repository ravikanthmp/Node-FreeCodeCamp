const http = require('http')
const {readFileSync} = require('fs')
const path = require('path');

const homePageContent = readFileSync(path.join(__dirname, 'navbar-app', 'index.html'), 'utf8');
const cssContent = readFileSync(path.join(__dirname, 'navbar-app', 'styles.css'), 'utf8');
const jsContent = readFileSync(path.join(__dirname, 'navbar-app', 'browser-app.js'), 'utf8');
const logoContent = readFileSync(path.join(__dirname, 'navbar-app', 'logo.svg'), 'utf8');

let server = http.createServer();
server.on('request', (req, res) => {

    console.log(req.url);

    if (req.url === "/"){
        res.writeHead(200, {'content-type' : "text/html"})
        res.write(homePageContent)
    }else if (req.url === "/styles.css"){
        res.writeHead(200, {'content-type' : "text/css"})
        res.write(cssContent)
    }else if (req.url === "/browser-app.js"){
        res.writeHead(200, {'content-type' : "text/javascript"})
        res.write(jsContent)
    } else if (req.url === "/logo.svg"){
        res.writeHead(200, {'content-type' : "image/svg+xml"})
        res.write(logoContent)
    } else if (req.url === "/about.html"){
        res.writeHead(200, {'content-type' : "text/html"})
        res.write('<p>About</p>')
    }else{
        res.writeHead(404, {'content-type' : "text/html"})
        res.write('<p>Not Found</p>')
    }


    res.end();
})

server.listen(5000, () => console.log(`server started on port 5000`))


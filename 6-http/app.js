const http = require('http');
const server = http.createServer( (req, res) => {

    if(req.url === '/'){
        res.end(" Hi there from Mangipudi's")
    }else if(req.url === '/about'){
        res.end(" Get out")
    }else{
        res.end(" Get out 2")
    }

})
server.listen(5000)

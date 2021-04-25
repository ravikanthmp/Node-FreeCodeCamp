const http = require('http');

var req = 0;

// when a request comes in, the event loop picks up the callback


// 1. user1 accesses '/about'. all is fine
// 2. user2 accesses '/special' he/she runs blocking code
// 3. user3 accesses '/about'. He/she is able to see the page only when 2 is done

// LESSON : DONT RUN BLOCKING CODE ON MAIN THREAD
// Offload long running tasks or run asynchronously. Only when data is ready, invoke the callback
const server = http.createServer((req, res) => {
   if(req.url === '/'){
       res.end('Home Page')
   }else if(req.url === '/about'){
    res.end('About Page')
   }else  if(req.url === '/special'){
    for(let i = 0; i < 10000; i++){
        for(let j = 0; j < 10000; j++){
                for(let killed = 0; killed < 1000; killed++){

                }
        }
    }
     res.end('Special Page')
    }else{
        res.end("Get out!")
    }

    
})


// starts a process that runs forever (until killed)
server.listen(5000, () => {
    console.log(`server started on port 5000`)
})
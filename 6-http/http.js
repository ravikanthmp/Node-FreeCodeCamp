const http = require('http')
const Stopwatch = require('statman-stopwatch');

const server = http.createServer(((req, res) => {
    const stopwatch = new Stopwatch(true);
    console.log('request is ' + req)
    setTimeout(
        () => res.end(`hey there! Request took ${stopwatch.stop()} time`),
        2000
    )

}))

server.listen('5000', () => {
    console.log('server started at port 5000')
})

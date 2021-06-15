const express = require('express');
const path = require('path')
const app = express();

// get for a particular route
// app.get("/", ((req, res) => {
//     res.send("Hi there!")
//     res.end();
// }))

// send file (IN-BUILT)
app.get("/", ((req, res) => {
    const index = path.resolve(__dirname, './../../navbar-app', 'index.html')
    res.sendFile(index)
}))



// default fallback
app.use('*', ((req, res) => {
    res.status(404).send("No Content!")
}))

app.listen(5000, () => console.log(`Express app started at 5000`))
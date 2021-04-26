const express = require('express');

const app = express();

/*
app.listen
app.get
app.post
app.put
app.delete
app.all      <--    All Http Methods
app.use      <--    Middleware

 */
app.listen(5000, () => console.log("This is spun with from express.js")) // starts the server

app.get("/", (req, res) => {
    res.send("<p>Hey there! from Express </p>")
})

app.get("/about", (req, res) => {
    res.send("<p>About! from Express </p>")
})

app.get("/special", (req, res) => {
    res.send("<p>Special! from Express </p>")
})

// maps to all other requests!
app.all("*", (req, res) => {
    res.send("<p> gtfo! </p>")
})

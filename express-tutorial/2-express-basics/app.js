const express = require('express');
const path = require('path')
const { products, people } = require('./data')
const app = express();

app.use(express.static('navbar-app'))

app.get('/api/products', ((req, res) => {
    res.json(products)
}))


// default fallback
app.use('*', ((req, res) => {
    res.status(404).send("No Content!")
}))

app.listen(5000, () => console.log(`Express app started at 5000`))
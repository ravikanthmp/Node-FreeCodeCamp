const express = require('express');
const path = require('path')
const { products, people } = require('./data')
const app = express();

app.use(express.static('navbar-app'))

// all products
app.get('/api/products', ((req, res) => {
    res.json(products)
}))

// get product
app.get('/api/products/:productId', ((req, res) => {
    console.log(products.filter(product => product.id === parseInt(req.params.productId)))
    res.json(products.filter(product => product.id === parseInt(req.params.productId)));
}))

// default fallback
app.use('*', ((req, res) => {
    res.status(404).send("No Content!")
}))

app.listen(5000, () => console.log(`Express app started at 5000`))
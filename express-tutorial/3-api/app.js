const express = require('express');
const {products} = require('./data')

const app = express();
app.listen(5000, () => console.log("server started on port 5000"))

app.get("/", ((req, res) => {
    res.send(`<p> Go to this link to see out products <a href="/api/products" >Products Link</a></p>`)

}))

// all products
app.get("/api/products", ((req, res) => {
    res.json(products)
}))

// path params
app.get("/api/products/:productId", ((req, res) => {
    console.log(req.params)
    const ans = products.find(product => product.id === Number(req.params.productId));
    ans ? res.json(ans) : res.status(404).send('Product not found!');

}))

app.get("/api/v1/products/", ((req, res) => {

    const params = req.query;
    if (params.search){
        const results = products.filter(product => product.desc.includes(params.search))
        res.json(results)
    }else{
        res.status(404).send('Products not found!');
    }
}))


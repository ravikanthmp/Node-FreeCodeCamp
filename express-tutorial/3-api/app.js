const express = require('express');
const {products} = require('./data')
const logDate = require('./utils')
const morgan = require("morgan");
const path = require('path');
const auth = require('./auth')

const app = express();

let people = [];

app.use(
    [express.static(path.join(__dirname, 'public')) ,
    logDate, morgan("tiny")]
)

app.get("/dummy", ((req, res) => {
    console.log(req.url)
    res.send(`<p> Go to this link to see out products <a href="/api/products" >Products Link</a></p>`)

}))

// all products
app.get("/api/products", ((req, res) => {
    res.json(products)
}))

app.get("/api/users", ((req, res) => {
    res.json(people)
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

app.post("/addUser",
    express.urlencoded({extended : false}),
    ((req, res) => {
        const name = req.body.name;
        if (name){
            people.push(name)
            res.status(201).send("Added a new user!")
        }else {
            res.status(500).send("Error!")
        }

}))


app.all("*", (req, res) => {
    res.status(404).send("Page Not Found!")
})

app.listen(5000, () => console.log("server started on port 5000"))

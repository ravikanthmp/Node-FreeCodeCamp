const express = require('express')
let router = express.Router;


// all products
router.get("/api/products", ((req, res) => {
    res.json(products)
}))

router.get("/api/users", ((req, res) => {
    res.json(people)
}))

// path params
router.get("/api/products/:productId", ((req, res) => {
    console.log(req.params)
    const ans = products.find(product => product.id === Number(req.params.productId));
    ans ? res.json(ans) : res.status(404).send('Product not found!');

}))

router.get("/api/v1/products/", ((req, res) => {

    const params = req.query;
    if (params.search){
        const results = products.filter(product => product.desc.includes(params.search))
        res.json(results)
    }else{
        res.status(404).send('Products not found!');
    }
}))

router.post("/addUser",
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


router.all("*", (req, res) => {
    res.status(404).send("Page Not Found!")
})

module.exports = router;

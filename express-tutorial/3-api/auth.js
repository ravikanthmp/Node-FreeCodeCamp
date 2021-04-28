const auth = (req, res, next) => {
    let query = req.query;
    if (query.user && query.user === "ravi"){
        req.authUsers = [{name : "ravi", id : 1}]
        next()
    }else {
        res.status(401).send("You are not authorised")
        // next()
    }
}

module.exports = auth;
function logDate(req, res, next) {
    console.log(new Date().toDateString());
    next();
}

module.exports = logDate;
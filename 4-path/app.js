const path = require('path')

// seperator
console.log(path.sep)

//normailzed path name <-- a/b/c
const res = path.join('a', '//b//', '/////c')
console.log(res)

// basename <-- c
const basename = path.basename(res)
console.log(basename)

// absolute path <--/Users/ravikanthm/PERS/repositories/Node-FreeCodeCamp/tutorial/4-path/a/b/c
console.log(path.resolve(__dirname, 'a', 'b', 'c'))
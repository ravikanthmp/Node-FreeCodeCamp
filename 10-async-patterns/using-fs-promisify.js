const { readFile, writeFile } = require('fs').promises;

const concat = (file1, file2, path) => {
    Promise
        .all([readFile(file1), readFile(file2)])
        .then(([data1, data2]) => writeFile(path, data1 + " THIS IS COOL (USING fs.promise) " + data2, {flag : 'a'}))
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const file1 = './../sample/subfolder/1.txt'
const file2 = './../sample/subfolder/2.txt'
const path = './../sample/subfolder/async-result-v3.txt'

concat(file1, file2, path)
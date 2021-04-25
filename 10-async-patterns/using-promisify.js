const { readFile, writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const concat = (file1, file2, path) => {
    Promise
        .all([readFilePromise(file1), readFilePromise(file2)])
        .then(([data1, data2]) => writeFilePromise(path, data1 + " THIS IS COOL (USING Util.Promisify) " + data2, {flag : 'a'}))
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const file1 = './../sample/subfolder/1.txt'
const file2 = './../sample/subfolder/2.txt'
const path = './../sample/subfolder/async-result-v2.txt'

concat(file1, file2, path)
const { readFile, writeFile } = require('fs');

function getText(file) {
    return new Promise(function (resolve, reject) {
        readFile(file, "utf8", function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

function writeText(path, data) {
    return new Promise(function (resolve, reject) {
        writeFile(path, data, {flag : 'a'},  function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}


const concat = (file1, file2, path) => {
    Promise
        .all([getText(file1), getText(file2)])
        .then(([data1, data2]) => writeText(path, data1 + " THIS IS COOL " + data2))
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const file1 = './../sample/subfolder/1.txt'
const file2 = './../sample/subfolder/2.txt'
const path = './../sample/subfolder/async-result-v2.txt'

concat(file1, file2, path)
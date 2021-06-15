const fs = require('fs');
const path = require('path')


console.log('start async read')
fs.readFile('./../sample/subfolder/2.txt', 'utf-8', (err, data) => {
    if (err){
        console.log("ERROR " + err.message)
    }else {
        // console.log("DATA " + data)

        console.log('end async read')
    }
})


console.log('start async write')
fs.writeFile('./../sample/subfolder/3-async-write.txt', 'Hi there from async', (err, res) => {
    if (err){
        console.log("ERROR " + err.message)
    }else {
        // console.log("DATA " + res)

        console.log('end async write')
    }
})
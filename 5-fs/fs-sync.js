const fs = require('fs');
const path = require('path')

console.log('start sync read')
const f1 = fs.readFileSync('./../sample/subfolder/1.txt', 'utf-8')
console.log('end sync read')

console.log('start sync write')
fs.writeFileSync('./../sample/subfolder/2.txt', 'this is new shit', {flag : 'a'})
console.log('end sync write')
console.log(f1)
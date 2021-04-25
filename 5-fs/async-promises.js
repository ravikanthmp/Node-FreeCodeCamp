const fs = require('fs');

console.log('1')

const fName = './../sample/subfolder/test.txt';
async function readFile(filename){
    await fs.readFile(filename, 'utf8');
} 
const data =  readFile(fName);
console.log('3')

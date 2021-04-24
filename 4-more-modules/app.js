// const os = require('os');
// console.log(os.platform())

const path = require('path')
// console.log(path)

console.log(path.sep) // platform specific separator. '/' for Mac OS

const filePath = path.join('/sample', 'subfolder', 'test.txt' );
console.log(filePath)    //  <--     "/sample/subfolder/test.txt" Joins by platform seperator and returns normalized (remoevd excess '/' also)

const filePath2 = path.join('/sample///', '///subfolder', '///test.txt' );
console.log(filePath2)   //  <--     "/sample/subfolder/test.txt"


const basePath = path.basename(filePath);
console.log(basePath)   //  <--     "test.txt"

const absolutePath = path.resolve(__dirname, 'sample', 'subfolder', 'test.txt');  // __dirname points to cwd of the current file
console.log(absolutePath)
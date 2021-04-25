const { readFile, writeFile } = require('fs').promises;

const concat = async (file1, file2, path) => {

    try {
        const [data1, data2] = await Promise.all([readFile(file1), readFile(file2)]);
    
        writeFile(path, data1 + " THIS IS COOL (USING Async/Await fs.promise) " + data2, { flag: 'a' })

    } catch (err) {
        console.log(err);
    }
}

const file1 = './../sample/subfolder/1.txt'
const file2 = './../sample/subfolder/2.txt'
const path = './../sample/subfolder/async-result-v4.txt'

concat(file1, file2, path)
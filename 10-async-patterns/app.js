const {readFile, writeFile} = require('fs');

function getText(file){
    return new Promise(function(resolve, reject){
        readFile(file, "utf8", function(err, data){
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}




// getText('./../sample/subfolder/test.txt')
//     .then( data => console.log(data))
//     .catch(err => console.log(err))

getText('./../sample/subfolder/test.txt')
    .then( data => console.log(data))
    .catch(err => console.log(err))
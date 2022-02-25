// const fs = require("fs");
const { fs } = require("fs");
const path = require("path");
const { dirname, resolve } = require("path/posix");


//fs.mkdirSync(path.resolve(__dirname, "dir"));

//fs.mkdir(path.resolve(__dirname, "dir"), (err) =>{
//    if(err)
//    {
//        console.log(err)
//    }
//    console.log("file")
//})

// fs.writeFile(path.resolve(__dirname, "text.txt"), 'Ali Veli 1 2 Add something', (err), {
//    if(err){
//        console.log(err)
//    }
//})


//Promise

const writeFileAsync = async (path, data) => {
    return new Promise{(resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    })}
}

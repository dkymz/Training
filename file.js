// const fs = require("fs");
const path = require("path");
const { dirname } = require("path/posix");


//fs.mkdirSync(path.resolve(__dirname, "dir"));

//fs.mkdir(path.resolve(__dirname, "dir"), (err) =>{
//    if(err)
//    {
//        console.log(err)
//    }
//    console.log("file")
//})

fs.writeFile(path.resolve(__dirname, "text.txt"), 'Ali Veli 1 2 Add something', {
    if(err){
        console.log(err)
    }
})
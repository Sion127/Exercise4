const fs = require("fs");
const path = require("path");

//Método para crear directorios
fs.mkdir(path.join(__dirname,'HTML'), {recursive:true}, (err) => {
    if (err){
        console.log("Can't be create the folder");
        console.error(err);
    } else {
        console.log("The folder has been created");
    }
});
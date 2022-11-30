const fs = require("fs");
const path = require("path");

//Método para crear directorios
fs.mkdir(path.join(__dirname,'HTML'),(err) => {
    if (err){
        return console.error("Can't be create the folder, because it has allready exists",err);
    } else {
        console.log("The folder has been created");
    }
});
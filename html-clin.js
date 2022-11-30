const fs = require("fs");
const pathDir = require("path");

//Método para crear directorios
fs.mkdir(pathDir.join(__dirname,'HTML'),(err) => {
    if (err){
        return console.error("Can't be create the folder, because it has allready exists",err);
    } else {
        console.log("The folder has been created");
    }

fs.writeFile("HTML/index.html","",{encoding:"utf-8"}, (err)=> {
    if (err){
        console.error("The file can't be created",err);
    } else {
        console.log("The file has been created successfully");
    }
});
});
const fs = require("fs");
const process = require("process");
let option;
let pathDir = process.argv[2];
let pathFile = pathDir +"/index.html";

switch (option) {

    case "HTML":

    //Método para crear directorios
        fs.mkdir(pathDir,(err) => {
            if (err){
                return console.error("Can't be create the folder, because it has allready exists",err);
            } else {
                console.log("The folder has been created");
              }

    //Metodo para crear el archivo
        fs.writeFile(pathFile,"",{encoding:"utf-8"}, (err)=> {
            if (err){
                console.error("The file can't be created",err);
            } else {
                console.log("The file has been created successfully");
              }
        });
    });

break;


}
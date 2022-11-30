const fs = require("fs");
const process = require("process");
let pathDir = process.argv[2];
let option = pathDir;
let pathHtmlFile = pathDir + `/index.html`;
let pathCssFile = pathDir + `/styles.css`;
let pathJsFile = pathDir + `/main.js`;



switch (option) {

    case "HTML":

    //Método para crear directorios
        fs.mkdir(pathDir,(err) => {
            if (err){
                console.error(`Can't be create the folder ${pathDir}, because it has allready exists ${err}`);
            } else {
                console.log(`The folder ${pathDir} has been created`);
              }

    //Metodo para crear el archivo
        fs.writeFile(pathHtmlFile,"",{encoding:"utf-8"}, (err)=> {
            if (err){
                console.error("The file can't be created",err);
            } else {
                console.log("HTML file has been created successfully");
              }
        });
    });

break;

    case "CSS":

        //Método para crear directorios
            fs.mkdir(pathDir,(err) => {
                if (err){
                     console.error(`Can't be create the folder ${pathDir}, because it has allready exists ${err}`);
                } else {
                    console.log(`The folder ${pathDir} has been created`);
                  }
    
        //Metodo para crear el archivo
            fs.writeFile(pathCssFile,"",{encoding:"utf-8"}, (err)=> {
                if (err){
                    console.error("The file can't be created",err);
                } else {
                    console.log("CSS file has been created successfully");
                  }
            });
        });

break;

        case "JS":

            //Método para crear directorios
                fs.mkdir(pathDir,(err) => {
                    if (err){
                        console.error(`Can't be create the folder ${pathDir}, because it has allready exists ${err}`);
                    } else {
                        console.log(`The folder ${pathDir} has been created`);;
                      }
        
            //Metodo para crear el archivo
                fs.writeFile(pathJsFile,"",{encoding:"utf-8"}, (err)=> {
                    if (err){
                        console.error("The file can't be created",err);
                    } else {
                        console.log("The file has been created successfully");
                      }
                });
            });
break;

case "INIT":

    //Método para crear directorios
        fs.mkdir(pathDir,(err) => {
            if (err){
                console.error(`Can't be create the folder ${pathDir}, because it has allready exists ${err}`);
            } else {
                console.log(`The folder ${pathDir} has been created`);;
              }

    //Metodo para crear el archivo
        fs.writeFile(pathJsFile,"",{encoding:"utf-8"}, (err)=> {
            if (err){
                console.error("The file can't be created",err);
            } else {
                console.log("The file has been created successfully");
              }
        });
    });
break;

default:
    console.log("This option is not able yet");
break;

}
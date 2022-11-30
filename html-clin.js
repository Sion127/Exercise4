const fs = require("fs");
const process = require("process");
let pathDir = process.argv[2];
let option = pathDir;
let pathHtmlFile = pathDir + `/index.html`;
let pathCssFile = pathDir + `/styles.css`;
let pathJsFile = pathDir + `/main.js`;
const htmlPath = "HTML";
const cssPath = "CSS"; 
const jsPath =  "JS";
const htmlFilePath = htmlPath + "/index.html";
const cssFilePath = cssPath + "/styles.css";
const jsFilePath = jsPath + "/main.js";



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

            fs.mkdir(pathDir,(err) => {
                if (err){
                     console.error(`Can't be create the folder ${pathDir}, because it has allready exists ${err}`);
                } else {
                    console.log(`The folder ${pathDir} has been created`);
                  }
    
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

                fs.mkdir(pathDir,(err) => {
                    if (err){
                        console.error(`Can't be create the folder ${pathDir}, because it has allready exists ${err}`);
                    } else {
                        console.log(`The folder ${pathDir} has been created`);;
                      }
    
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

     fs.mkdir(htmlPath,(err) => {
        if (err){
            console.error(`Can't be create the folder ${htmlPath}, because it has allready exists ${err}`);
        } else {
            console.log(`The folder ${htmlPath} has been created`);
          }

    fs.writeFile(htmlFilePath,"",{encoding:"utf-8"}, (err)=> {
        if (err){
            console.error("The file can't be created",err);
        } else {
            console.log("HTML file has been created successfully");
          }
    });
});

    fs.mkdir(cssPath,(err) => {
        if (err){
             console.error(`Can't be create the folder ${cssPath}, because it has allready exists ${err}`);
        } else {
            console.log(`The folder ${cssPath} has been created`);
         }

    fs.writeFile(cssFilePath,"",{encoding:"utf-8"}, (err)=> {
        if (err){
          console.error("The file can't be created",err);
     } else {
           console.log("CSS file has been created successfully");
      }
    });
});

    fs.mkdir(jsPath,(err) => {
        if (err){
            console.error(`Can't be create the folder ${jsPath}, because it has allready exists ${err}`);
        } else {
            console.log(`The folder ${jsPath} has been created`);;
          }

    fs.writeFile(jsFilePath,"",{encoding:"utf-8"}, (err)=> {
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
const fs = require("fs");

const filePath = "./clase/4/examplesFS/example.txt";

fs.writeFileSync(filePath, "¡Hola Coders, estoy en un archivo!");

if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, "utf8");

    console.log(content);

    fs.appendFileSync(filePath, " Mas contenido");

    content = fs.readFileSync(filePath, "utf8");

    console.log(content);

    fs.unlinkSync(filePath);
}
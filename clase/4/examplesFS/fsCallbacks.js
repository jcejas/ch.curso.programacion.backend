const fs = require("fs");

const filePath = "./clase/4/examplesFS/example.txt";

fs.writeFile(filePath, "Hola Coders desde el FS Callback!!", (error) => {
    if (error) return console.error("Error al escribir el archivo");

    fs.readFile(filePath, "utf8", (error, result) => {
        if (error) return console.error("Error al leer el archivo");

        console.log(result);

        fs.appendFile(filePath, " Más contenido", (error) => {
            if (error) return console.error("Error al actualizar el archivo");

            fs.readFile(filePath, "utf8", (error, result) => {
                if (error) return console.error("Error al leer el archivo");

                console.log(result);

                fs.unlink(filePath, (error) => {
                    if (error) return console.error("Error al eliminar el archivo");
                })
            })

        })
    });
})
const fs = require("fs");

const runAsync = async (filePath) => {
    try {
        await fs.promises.writeFile(filePath, "¡Hola Coders, estoy en un archivo con Promesas!");
        
        let content = await fs.promises.readFile(filePath, "utf8");
    
        console.log(content);
    
        await fs.promises.appendFile(filePath, " Mas contenido");
    
        content = await fs.promises.readFile(filePath, "utf8")
    
        console.log(content);
    
        // Para generar un delay en el borrado del archivo
        //setTimeout(() => fs.promises.unlink(filePath), 5000);
        
        await fs.promises.unlink(filePath);
    } catch (error) {
        console.error(error);
    }
}

runAsync("./clase/4/examplesFS/example.txt");
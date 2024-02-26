const fs = require("fs");

class ManagerUsuarios {
    
    constructor(archivo) {
        this.archivo = archivo;
    }

    async CrearUsuario(usuario) {
        const nuevoUsuario = {
            Nombre: usuario.Nombre ?? "Sin Nombre",
            Apellido: usuario.Apellido ?? "Sin Apellido",
            Edad: usuario.Edad ?? "Sin Edad",
            Curso: usuario.Curso ?? "Sin Curso"
        };
        
        const usuarios = await this.ConsultarUsuarios();
        usuarios.push(nuevoUsuario);

        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(usuarios, null, "\t"));

            console.log("Usuario creado correctamente!");
        } catch(e) {
            console.error("Error al crear el usuario\n", e);
        }
    }

    async ConsultarUsuarios() {
        try {
            const usuarios = await fs.promises.readFile(this.archivo, "utf-8");
            
            return JSON.parse(usuarios);
        } catch (error) {
            console.error(error);
            
            return [];
        }
    }
}
//Exporto la clase
module.exports = ManagerUsuarios;
const fs = require("fs");
const crypto = require("crypto");

module.exports = class UserManager {
    constructor (file) {
        this.file = file;
    }

    async getAllUsers() {
        try {
            const users = await fs.promises.readFile(this.file, "utf-8");

            return JSON.parse(users);
        } catch (error) {
            console.error(error.message);
            return [];
        }
    }

    async createUser(user) {

        if (!user.UserName || !user.Password) return "Debe proveer un usuario y contraseña!";

        const newUser = {
            Name: user.Name ?? "Sin nombre",
            LastName: user.LastName ?? "Sin apellido",
            UserName: user.UserName,
            Password:this.getHash(user.Password)
        }

        const users = await this.getAllUsers();

        users.push(newUser);

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(users, null, "\t"));

            return "Usuario creado correctamente!"
        } catch (error) {
            console.error(error.message);
            return "Error al crear usuario!"
        }
    }

    getHash(password) {
        return crypto.createHash("sha256").update(password).digest("hex");
    }

    async userValidator(user) {
        const userValidate = {
            UserName: user.UserName,
            Password: user.Password
        }

        const users = await this.getAllUsers();

        for(let key in users) {
            if (userValidate.UserName === users[key].UserName) {
                if (this.getHash(userValidate.Password) === users[key].Password) return "Usuario Logueado!"

                return "Usuario o contraseña incorrectos!"
            }
        }

        return "Usuario no encontrado!";
    }
}

//module.exports = UserManager; //Opcion de exportacion
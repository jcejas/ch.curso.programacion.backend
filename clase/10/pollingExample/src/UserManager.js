export class UserManager {
    
    constructor() {
        this.users = [];
    }

    CreateUser(user) {
        const newUser = {
            id: this.GetId(),
            firstName: user.firstName ?? "Sin Nombre",
            lastName: user.lastName ?? "Sin Apellido",
            age: user.age ?? "Sin Edad",
            course: user.course ?? "Sin Curso"
        };
        
        this.users.push(newUser);

        return "Usuario creado correctamente!";
    }

    GetAllUsers() {
        return this.users;
    }

    GetId() {
        const usersLength = this.users.length;
        if(usersLength > 0) {
            return parseInt(this.users[usersLength - 1].id + 1);
        }

        return 1;
    }
}
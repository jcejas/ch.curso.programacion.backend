const UserManager = require("./UserManager");

const UM = new UserManager(`${__dirname}/Usuarios.json`);

const createUsers = async () => {
    //Crear usuario
    let result = await UM.createUser({
        Name: "Joaquin",
        LastName: "Cejas",
        UserName: "Joaco",
        Password: "coder123"
    });
    console.log(result);

    result = await UM.createUser({
        Name: "Joaquin",
        LastName: "Cejas",
        Password: "coder123"
    });
    console.log(result);

    result = await UM.createUser({
        Name: "Ivan",
        LastName: "Gonzalez",
        UserName: "Ivi",
        Password: "pass2024"
    });
    console.log(result);

    console.log(await UM.getAllUsers());
}

//Comparar contraseñas
const verifyUsers = async () => {
    let result = await UM.userValidator({
        UserName: "Joaco",
        Password: "asdasdasd"
    });
    console.log(result);

    result = await UM.userValidator({
        UserName: "Joaco",
        Password: "coder123"
    });
    console.log(result);
}

//Crear usuarios de prueba
//createUsers();
verifyUsers();
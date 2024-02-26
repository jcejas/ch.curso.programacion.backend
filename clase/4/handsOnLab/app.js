const ManagerUsuarios = require('./ManagerUsuarios'); //Importo la clase

const MU = new ManagerUsuarios(`${__dirname}/Usuarios.json`);

const run = async () => {
    await MU.CrearUsuario({
        Nombre: "Joaquin",
        Apellido: "Cejas",
        Edad: 29,
        Curso: "Programación Backend"
    });

    let users = await MU.ConsultarUsuarios();
    console.log(users);

    await MU.CrearUsuario({
        Nombre: "Jorge",
        Edad: 44,
        Curso: "UX/UI"
    });

    users = await MU.ConsultarUsuarios();
    console.log(users);
}

run();
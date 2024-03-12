import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();

//Incializamos el motor de plantillas
app.engine("handlebars", handlebars.engine());

//Establecemos la ruta de vistas
app.set("views",`${__dirname}/views`);

//Establecemos el motor de renderizado
app.set("view engine", "handlebars");

const users = [
    {
        nombre: "Usuario 1",
        apellido: "Apellido 1",
        edad: 30,
        correo:"usuario1@gmail.com",
        telefono: "123456789"
    },
    {
        nombre: "Usuario 2",
        apellido: "Apellido 2",
        edad: 40,
        correo:"usuario2@gmail.com",
        telefono: "123456789"
    },
    {
        nombre: "Usuario 3",
        apellido: "Apellido 3",
        edad: 50,
        correo:"usuario3@gmail.com",
        telefono: "123456789"
    },
    {
        nombre: "Usuario 4",
        apellido: "Apellido 4",
        edad: 60,
        correo:"usuario4@gmail.com",
        telefono: "123456789"
    },
    {
        nombre: "Usuario 5",
        apellido: "Apellido 5",
        edad: 70,
        correo:"usuario5@gmail.com",
        telefono: "123456789"
    }
];

app.get("/", (req, res) => {
    let randomIndex = Math.floor(Math.random() * users.length);
    let randomUser = users[randomIndex];
    res.render(
        "index",
        {
            nombre: randomUser.nombre,
            apellido: randomUser.apellido,
            edad: randomUser.edad,
            correo: randomUser.correo,
            telefono: randomUser.telefono
        }
    )
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
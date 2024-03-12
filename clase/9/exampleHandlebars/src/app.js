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

app.get("/", (req, res) => {

    const dynamicName = req.query.name ?? "Usuario";
    res.render(
        "index",
        {
            title: "Coder House",
            name: dynamicName
        }
    )
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";

const app = express();

//Incializamos el motor de plantillas
app.engine("handlebars", handlebars.engine());

//Establecemos la ruta de vistas
app.set("views",`${__dirname}/views`);

//Establecemos el motor de renderizado
app.set("view engine", "handlebars");

//Establecemos el servidor estático de archivos
app.use(express.static(`${__dirname}/../public`));

app.use("/", viewsRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
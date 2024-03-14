import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";

import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views",`${__dirname}/views`);
app.set("view engine", "handlebars");

app.use(express.static(`${__dirname}/../public`));

app.use("/", viewsRouter);

const PORT = 8080;
const httpServer = app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});


const socketServer = new Server(httpServer);
socketServer.on("connection", socket => {
    console.log("Nuevo cliente conectado -----> ", socket.id);

    socket.on("message", data => {
        console.log(data);
        socketServer.emit("messageShow", data) //Emito para todos los usuarios lo que se esta escribiendo
    });
});
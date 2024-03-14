import express from "express";
import handlebars from "express-handlebars";

import __dirname from "./utils.js";
import { UserManager } from "./UserManager.js";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", handlebars.engine());
app.set("views",`${__dirname}/views`);
app.set("view engine", "handlebars");

const UM = new UserManager();

app.get("/api/users", (req, res) => {
    res.send(UM.GetAllUsers());
});

app.post("/api/users", (req, res) => {
    const response = UM.CreateUser(req.body);
    res.status(201).send(response);
});

//View endpoint
app.get("/", (req, res) => {
    res.render(
        "index",
        {
            title: "Coderhouse"
        }
    )
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
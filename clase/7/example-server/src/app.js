import express from "express";
import { UserManager } from "./UserManager.js";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const UM = new UserManager("./Users.json");

app.get("/api/users", async (req, res) => {
    res.send(await UM.GetAllUsers());
});

app.post("/api/users", async (req, res) => {
    const response = await UM.CreateUser(req.body);
    res.status(201).send(response);
});

app.put("/api/users/:uid", async (req, res) => {
    const uid = req.params.uid;
    res.send(await UM.UpdateUser(uid, req.body));
});

app.delete("/api/users/:uid", async (req, res) => {
    const uid = req.params.uid;
    res.send(await UM.DeleteUser(uid));
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
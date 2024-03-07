import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();

const users = [];

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", uploader.single("profile"), (req, res) => {

    if (!req.file){
        return res.status(400).send({error: "Se necesita cargar una imagen para crear un usuario!"});
    }

    const { name, email, course } = req.body;

    if (!name || !email || !course) return res.status(400).send({error: "Faltan datos para crear al usuario!"});

    console.log(req.file);
    const profile = req.file.path;

    users.push({ name, email, course, profile });

    res.status(201).send({message: "Usuario creado correctamente!"});
});

export default router;
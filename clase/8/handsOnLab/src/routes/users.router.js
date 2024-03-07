import {Router} from "express";

const router = Router();

const users = [];

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    const { name, email, course } = req.body;

    if (!name || !email || !course) return res.status(400).send({error: "Faltan datos para crear al usuario!"});

    users.push({ name, email, course });

    res.status(201).send({message: "Usuario creado correctamente!"});
});

export default router;
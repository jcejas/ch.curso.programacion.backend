import {Router} from "express";

const router = Router();

const pets = [];

router.get("/", (req, res) => {
    res.send(pets);
});

router.post("/", (req, res) => {
    const { name, species } = req.body;

    if (!name || !species) return res.status(400).send({error: "Faltan datos para crear a la mascota!"});

    pets.push({ name, species });

    res.status(201).send({message: "Mascota creada correctamente!"});
});

export default router;
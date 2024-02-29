import express from "express";

const app = express();

const usuarios = [
    {id: "1", nombre: "Mauricio", apellido: "Espinosa", edad: 25},
    {id: "2", nombre: "Natalia", apellido: "Cardozo", edad: 23},
    {id: "3", nombre: "Roberto", apellido: "Gomez", edad: 30},
];

app.get("/", (req, res) => {
    res.send(usuarios);
});

app.get("/:idUsuario", (req, res) => {
    const idUsuario = req.params.idUsuario;
    
    let usuario = usuarios.find(usuario => usuario.id === idUsuario);

    if (!usuario) {
        return res.send({
            error: "Usuario no encontrado"
        });
    }

    res.send({usuario});
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
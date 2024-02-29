import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Bienvenidos al Index!");
});

app.get("/saludo", (req, res) => {
    res.send("<h1>Hola a todos los Coders, pero ahora desde express!</h1>");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
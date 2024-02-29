import express from "express";

const app = express();

app.get('/bienvenida', function(req, res) {
    res.send('<h1 style="color: blue;">hello world</h1>');
});

app.get('/usuario', function(req, res) {
    res.send({
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25,
        correo:"juan@gmail.com",
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
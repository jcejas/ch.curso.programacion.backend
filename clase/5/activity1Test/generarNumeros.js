// generarNumeros.js

// Función para generar números aleatorios en un rango específico
function generarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar 10000 números aleatorios en un rango de 1 a 20
const numerosAleatorios = [];
for (let i = 0; i < 10000; i++) {
    numerosAleatorios.push(generarNumero(1, 20));
}

// Exportar los números generados
module.exports = numerosAleatorios;
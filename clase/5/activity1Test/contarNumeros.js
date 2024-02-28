// contarNumeros.js

// Importar los números generados
const numerosAleatorios = require('./generarNumeros.js');

// Función para contar la cantidad de veces que aparece cada número
function contarNumeros(numeros) {
    const conteo = {};
    numeros.forEach(numero => {
        if (conteo[numero]) {
            conteo[numero]++;
        } else {
            conteo[numero] = 1;
        }
    });
    return conteo;
}

// Contar la cantidad de veces que aparece cada número
const resultado = contarNumeros(numerosAleatorios);

// Mostrar los resultados por consola
console.log("Resultados: ", resultado);
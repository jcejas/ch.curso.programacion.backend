function sumar(n1, n2) {
    return new Promise((resolve, reject) => {
        if (n1 === 0 || n2 === 0) {
            reject("[Suma] Operación innecesaria");
        } else {
            resolve(n1 + n2);
        }
    });
}

function restar(n1, n2) {
    return new Promise((resolve, reject) => {
        if (n1 === 0 || n2 === 0) {
            reject("[Resta] Operación inválida");
        } else if (n1 - n2 < 0) {
            reject("[Resta] La calculadora sólo puede devolver valores positivos");
        } else {
            resolve(n1 - n2);
        }
    });
}

function multiplicar(n1, n2) {
    return new Promise((resolve, reject) => {
        if (n1 < 0 || n2 < 0) {
            reject("[Multiplicacion] La calculadora sólo puede devolver valores positivos");
        } else {
            resolve(n1 * n2);
        }
    });
}

function dividir(n1, n2) {
    return new Promise((resolve, reject) => {
        if (n2 === 0) {
            reject('[Division] No se puede dividir por cero')
        } else {
            resolve(n1 / n2)
        }
    });
}

// Utilizo sincronismo mediante el "await" en un bloque que es asincrono
const asyncBlock = async (n1, n2) => {
    try {
        const multiplicacion = await multiplicar(n1, n2);
        const division = await dividir(n1, n2);
        const suma = await sumar(n1, n2);
        const resta = await restar(n1, n2);

        console.log(`Se operan los números ${n1} y ${n2}\n`);
        console.log(`Suma: ${suma}\nResta: ${resta}\nMultiplicacion: ${multiplicacion}\nDivision: ${division}`);
    } catch (error) {
        console.error(error);
    }
}

asyncBlock(10, 2);
asyncBlock(10, -2);
asyncBlock(6, 0);
function dividir(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject('no se puede dividir por cero')
        } else {
            resolve(dividendo / divisor)
        }
    });
}

const AsyncFunction = async (n1, n2) => {
    try {
        console.log("Empieza la ejecución");

        const resultado = await dividir(n1, n2);
        console.log(resultado);

    } catch (error) {
        console.log("Se genero un error");
        console.error(error);
    } finally { // Este bloque siempre se ejecuta indistintamente si se genera un error o no
        console.log("Termina la ejecución");
    }
}

AsyncFunction(10, 2);
AsyncFunction(10, 0);
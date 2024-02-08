class Contador {

    constructor (nombre) {
        this.nombre = nombre;
        this.total = 0;
    }

    static totalGlobal = 0;

    obtenerResponsable() {
        return this.nombre;
    }

    obtenerCuentaIndividual() {
        return this.total;
    }

    obtenerCuentaGlobal() {
        return Contador.totalGlobal;
    }

    contar() {
        this.total += 1;
        Contador.totalGlobal += 1;
    }
}


let persona_1 = new Contador("Joaco");
let persona_2 = new Contador("Sasha");

persona_1.contar();
persona_1.contar();
persona_1.contar();

persona_2.contar();
persona_2.contar();

console.log(`${persona_1.obtenerResponsable()}: ${persona_1.obtenerCuentaIndividual()}`);
console.log(`${persona_2.obtenerResponsable()}: ${persona_2.obtenerCuentaIndividual()}`);

console.log(`Cuenta Global: ${persona_1.obtenerCuentaGlobal()}`);
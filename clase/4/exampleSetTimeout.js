// Sync block
console.log("[SYNC] ¡Iniciando tarea!");
console.log("[SYNC] Realizando operación");
console.log("[SYNC] ¡Tarea finalizada!");

// Async block
const timer = (callback) => {
    setTimeout(() => {
        callback();
    }, 5000);
}

let operation = () => console.log("[ASYNC] Realizando operación");

console.log("[ASYNC] ¡Iniciando tarea!");
timer(operation);
console.log("[ASYNC] ¡Tarea finalizada!");
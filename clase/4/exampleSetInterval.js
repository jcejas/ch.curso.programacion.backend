// Sync block
console.log("[SYNC] ¡Iniciando tarea!");
console.log("[SYNC] Realizando operación");

for (let count = 1; count<=5; count++) {
    console.log(count);
}

console.log("[SYNC] ¡Tarea finalizada!");

// Async block
const countAsync = () => {
    let counter = 1;
    console.log("[ASYNC] Realizando operación");
    let timer = setInterval(() => {
        console.log(counter++);
        if (counter > 5) {
            clearInterval(timer);
        }
    }, 1000)
}

console.log("[ASYNC] ¡Iniciando tarea!");
countAsync();
console.log("[ASYNC] ¡Tarea finalizada!");
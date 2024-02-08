function mostrarLista(lista) {

    if (lista.length > 0) {
        lista.forEach(element => {
            console.log(element);
        });
        console.log(`La lista tiene ${lista.length} elementos`);
        console.log("La lista tiene " + lista.length + " elementos");
        return;
    }

    console.log("Lista vacia");
}

mostrarLista([]);
mostrarLista(["Hola", "Mundo", "Como", "Estas"]);
class TicketManager {

    #precioBaseDeGanancia; //Atributo privado
    constructor() {
        this.eventos = [];
    }

    getEventos() {
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad, fecha) {
        const evento = {
            id: this.#getId(),
            nombre,
            lugar,
            precio: precio + precio * 0.15,
            capacidad: typeof capacidad != "undefined" ? capacidad : 50,
            fecha: typeof fecha != "undefined" ? fecha : this.#nowDate(),
            participantes: []
        }

        this.eventos.push(evento);
    }

    agregarUsuario(eventoId, usuarioId) {

        let i = null;
        this.eventos.find(function (evento, indice) {
            if (evento.id === eventoId) i = indice;
        });

        if (i !== null) {
            this.eventos[i].participantes.push(usuarioId);
            return "Usuario agregado";
        }

        return "El evento no existe!";

        /*
        if (this.eventos.filter(evento => evento.id === eventoId).length === 0) {
            return "Evento no encontrado!";
        }
        */
    }

    ponerEventoEnGira(eventoId, lugar, fecha) {
        let i = null;
        this.eventos.find(function (evento, indice) {
            if (evento.id === eventoId) i = indice;
        });

        if (i !== null) {
            const nuevoEvento = {
                ...this.eventos[i]
            }
            nuevoEvento.id = this.#getId();
            nuevoEvento.lugar = lugar;
            nuevoEvento.fecha = fecha;
            nuevoEvento.participantes = [];
            
            this.eventos.push(nuevoEvento);

            return "Evento generado correctamente";
        }

        console.error("El evento no existe!");
        return "El evento no existe!";
    }

    #nowDate() {
        const fecha = new Date();
        const dia = fecha.getDate().toString().padStart(2, "0");
        const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
        const ano = fecha.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }

    #getId() {
        if (this.eventos.length === 0) return 1;

        return this.eventos[this.eventos.length - 1].id++;
    }

}

const TM = new TicketManager();
console.log(TM.getEventos());

TM.agregarEvento("AfterClass", "Remoto", 100);
TM.agregarEvento("Cafe Coder", "Caballito", 150, 100, "01/03/2024");
TM.agregarEvento("Otro evento", "CABA", 300);

console.log(TM.getEventos());

console.log(TM.agregarUsuario(1, 10));
console.log(TM.agregarUsuario(1, 5));

console.log(TM.ponerEventoEnGira(2, "Casa", "15/04/2024"));
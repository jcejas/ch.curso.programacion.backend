function obtenerFechaHoraActual() {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const año = fecha.getFullYear();
    const hora = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");
    const segundos = fecha.getSeconds().toString().padStart(2, "0");
  
    return `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;
  }

const path = "./clase/4";

const fs = require("fs")

fs.writeFile(`${path}/fecha.txt`, obtenerFechaHoraActual(), (err) => {
    if (err) {
        console.error(err)
        return
    }
    fs.readFile(`${path}/fecha.txt`, "utf-8", (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    })
})
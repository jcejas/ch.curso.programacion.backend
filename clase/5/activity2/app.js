const moment = require("moment");

//Imprimir fecha actual
//console.log(moment().format("DD/MM/YYYY H:m:s"));

const dateNow = moment();
console.log(dateNow);

const dateBorn = moment("1994-12-20");
console.log(dateBorn);

if (dateBorn.isValid()) {
    const allDays = dateNow.diff(dateBorn, "days");

    console.log(`Han pasado "${allDays}" días desde tu nacimiento`);
}
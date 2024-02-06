console.log("Hola Mundo!");

console.log([1, 2 , 3, 4]); //Array

console.log({
    name: "Joaco",
    age: 29
}); //Objeto

// -----------------------------------------------
//var variable = "Valor"; //Esta declaración ya no se usa
let variable = "Valor"; //Variable let (Su valor puede modificarse y reasignarse)
console.log(variable);

variable = "Otro valor";
console.log(variable);

variable = 123123;
console.log(variable);

variable = true;
console.log(variable);

const CONSTANTE = "Valor Constante";
//CONSTANTE = 123; //No se puede reasignar su valor
//CONSTANTE += " Otra cosa"; //No se puede añadir otro valor al existente

const Obj = { name: "Joaco" };
console.log(Obj);
Obj.course = "Programación Backend";
console.log(Obj);

//Obj = "Texto"; //Genera error por reasignación de valor



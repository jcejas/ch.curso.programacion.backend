let varTest = 0;

let varAssign = varTest || "Sin valor"; //OR interpreta el cero como boolean FALSE

console.log(varAssign);

// Operador Nullish "??"
let varWithNullish = varTest ?? "Sin valor"; //Nullish interpreta el cero como INTEGER
console.log(varWithNullish);

varWithNullish = null ?? "Sin valor";
console.log(varWithNullish);

//varWithNullish = notDefined ?? "Sin valor"; //Undefined
//console.log(varWithNullish); //Genera un error

// Validacion de variable no definida
varWithNullish = (typeof notDefined != "undefined") ? notDefined : "Sin valor" //Operador Ternario
console.log(varWithNullish);
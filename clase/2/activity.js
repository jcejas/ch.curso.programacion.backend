/*
Dados el objeto "objetos":
1. Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
2. Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)
*/

const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 2
    },
];

const new_list = new Set(objetos.map(obj => Object.keys(obj)).flat());

let total = {}
objetos.map((obj) =>{
    obj_entries = Object.entries(obj);
    obj_entries.map((value) =>{
        if(total[value[0]]){
            total[value[0]] += value[1];
        }else{
            total[value[0]] = value[1];
        }
    })
})

console.log('New List: ', new_list);
console.log('Total por producto: ', total);
//Scopes

let i = 1;

function test() {
    if (true) {
        let j = 2;

        console.log(i);
        console.log(j);
    }
    console.log(i);
    //console.log(j); //Genera un error "Reference Error"
}

test();

// Const
const a = 1;

//a = 0; //Genera un error "Uncaught TypeError: Assignment to constant variable."

const text = "Hola";
//text += " Mundo"; //Genera error "Uncaught TypeError: Assignment to constant variable."
console.log(text);

const number = 1;
//number += 1; //Genera error "Uncaught TypeError: Assignment to constant variable."
console.log(number);

const array = [1, 2, 3, 4];
console.log(array);

//Modificar algún elemento
array[0] = 10;
console.log(array);

//Agrego un elemento mas
array.push(25);
console.log(array);

array[2] = "Hola mundo";
console.log(array);

//array = "String"; //Genera error "Uncaught TypeError: Assignment to constant variable."

//Ultimo elemento de un array
console.log("Ultimo elemento: ", array[array.length - 1]);

console.log("Finalizacion del codigo");
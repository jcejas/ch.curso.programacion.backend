console.log("Este es el ejemplo para ES9");

// Operador spread y operador rest

function add(...numbers) {
    let add = 0;

    for (let n of numbers) {
        add += n;
    }

    return add;
}

const result = add(2, 3, 10, 9, 5);

console.log(`El resultado es: ${result}`);

// Operador rest
let obj = {
    name: 'Joaquin',
    lastName: 'Cejas',
    age: 29
};

const {lastName, ...obj_2} = obj;

console.log(obj_2);

// Operador spread (copia profunda de objetos)
const coders = {
    ivan: 'estudiante 1',
    jose: 'estudiante 2',
    jean: 'estudiante 3',
    profes: {
        joaco: 'profe',
        lucia: 'tutora adjunta'
    }
}

const coders_2 = coders;

coders_2.ivan = "Otra cosa";

console.log('coders: ', coders);
console.log('coders 2: ', coders_2);

const coders_3 = {...coders}; //No hace copia profundas (Solo copia el primer nivel de atributos)
coders_3.jean = "Otra cosa";

console.log('coders: ', coders);
console.log('coders 3: ', coders_3);

coders_3.profes.joaco = "Modificacion profunda";
console.log('coders: ', coders);
console.log('coders 3: ', coders_3);

// Copias profundas
const coders_copia_profunda = JSON.parse(JSON.stringify(coders));
coders_copia_profunda.profes.lucia = "Nerea";
console.log('coders: ', coders);
console.log('coders_copia_profunda: ', coders_copia_profunda);
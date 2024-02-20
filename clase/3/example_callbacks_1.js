let originalValues = [1, 2, 3, 4, 5];

let newValues = originalValues.map(n => n + 1); //Map recibe una arrow function como callback

let otherValues = originalValues.map(x => x * 2); //Map recibe una arrow function como callback

let moreValues = originalValues.map(x => "a"); //Map recibe una arrow function como callback

console.log(
    "originalValues:", originalValues,
    "\nnewValues:", newValues,
    "\notherValues:", otherValues,
    "\nmoreValues:", moreValues
);

const callbackFunction = (value) => {
    if (value%2 === 0) { // El operador "%" devuelve el resto de una división entre 2 números
        return value;
    } else {
        return "No es par";
    }
}

const evaluatePair = originalValues.map(callbackFunction);
console.log(evaluatePair);
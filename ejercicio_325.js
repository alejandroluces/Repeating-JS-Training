/*
Ejercicio 325
Validar si todos los elementos en un Array son mayores que un valor dado

Entrada: [12, 15, 18, 20]
Salida: true
*/

const arrNum = [12, 15, 18, 20];

const validate = (arr, value) =>{

    return arr.some(item=> item> value)
}

console.log(validate(arrNum,19));


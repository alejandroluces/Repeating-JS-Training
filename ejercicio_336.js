/*
Ejercicio 336
Validar si todos los números en un Array son mayores que 0

Entrada: [5, 8, 0, -3, 10]
Salida: false
*/

const validateArrNum = (arrNum) =>{

    return arrNum.every((item) => item>=0)

}

console.log(validateArrNum([5, 8, 0, -3, 10]));

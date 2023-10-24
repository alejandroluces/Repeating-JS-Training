/*
Ejercicio 318
 Validar si todos los elementos de un Array son mayores de edad

Entrada: [25, 18, 30, 16]
Salida: false
*/

const validateAge18 = (arrNum) =>{

    return arrNum.every((item)=> item>=18)
}

console.log(validateAge18([25, 18, 30, 18])) ;



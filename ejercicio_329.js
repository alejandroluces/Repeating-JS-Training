/*
Ejercicio 329
Validar si todos los elementos en un Array son múltiplos de 5

Entrada: [25, 10, 15, 30]
Salida: true

*/

const validateMultiploFive = (arrNum) =>{

    return arrNum.some((item)=> item%5===0)

}

console.log(validateMultiploFive([25, 10, 15, 30]));

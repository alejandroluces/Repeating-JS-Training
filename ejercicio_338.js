/*

Ejercicio 338
 Verificar si todos los elementos de un Array son múltiplos de 5

Entrada: [25, 10, 15, 30]
Salida: true
 */

const validateMultiploFive = (arrNum) =>{

    return arrNum.every((item)=> item%5===0)
}

console.log(validateMultiploFive([25, 10, 15, 30]));



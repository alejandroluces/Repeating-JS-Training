/*
Ejercicio 327 
Verificar si un Array de números contiene al menos un número primo

Entrada: [4, 9, 15, 7, 10]
Salida: true
*/

const validateNumPrimo = (arrNum) =>{

    return arrNum.some((item)=> item%2!==0 && item%3!==0 )
}

console.log(validateNumPrimo([4, 7, 15, 16, 10]));



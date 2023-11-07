/*
Ejercicio 360
Ejercicio 10: Extraer elementos desde el final de un Array

Entrada: [1, 2, 3, 4, 5], 
Salida: [3, 4, 5]
*/

const extraNum = (arrNum) => { 

    return arrNum.slice(-3)
}
console.log(extraNum([1, 2, 3, 4, 5]));



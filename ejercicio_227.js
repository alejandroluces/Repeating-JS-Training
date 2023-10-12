/*
Ejercicio 227
Eliminar el Primer Elemento de un Array y Calcular la Suma de los Elementos Restantes:

Entrada: Un array de números.
Salida: Un ejemplo sería:
Entrada: [5, 10, 15, 20, 25]
Salida: 70 (5 + 10 + 15 + 20 + 25)
*/

const deleteAndSumNumbers = (arrNum) =>{

    arrNum.shift()
    return arrNum.reduce((a,b)=>a+b)
}

console.log(deleteAndSumNumbers([5, 10, 15, 20, 25]));



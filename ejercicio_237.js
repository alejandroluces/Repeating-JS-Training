/*
Ejercicio 237
Agregar Elementos al Principio de un Array y Calcular la Suma de los Elementos:

Entrada: Un array de números.
Salida: Un ejemplo sería:
Entrada: [5, 10, 15, 20, 25] (Agregar 30 al principio)
Salida: 105 (5 + 10 + 15 + 20 + 25 + 30)
*/

const addNumAndSum = (arr,num) =>{

    return [num,...arr].reduce((a,b) => a+b)

    // arr.unshift(num)
    // return arr.reduce((a,b) => a+b)

}
console.log(addNumAndSum([5, 10, 15, 20, 25],30));



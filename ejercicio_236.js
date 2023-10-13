/*
Ejercicio 236
Agregar Elementos al Principio de un Array y Crear un Nuevo Array Invertido:

Entrada: Un array de números.
Salida: Un ejemplo sería:
Entrada: [1, 2, 3, 4, 5] (Agregar 6 al principio)
Salida: [5, 4, 3, 2, 1, 6]
*/

const arrNumbers = [1, 2, 3, 4, 5]
const addNum= 6

const addingNumbers = (arr, num) =>{

    arr.unshift(num)
    return arr.reverse()

    // return [num,...arr].reverse()

    
   
}

console.log(addingNumbers(arrNumbers,addNum));


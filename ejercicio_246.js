/*
Ejercicio 246
Agregar Elementos al Principio de un Array de Números y Crear un Nuevo Array con Elementos Filtrados:

Entrada: Un array de números.
Salida: Un ejemplo sería:
Entrada: [5, 10, 15, 20, 25] (Agregar 2 al principio y filtrar elementos menores que 10)
Salida: [15, 20, 25]
*/

const addAndDilterNu = (arrNum,num) =>{

    return [num,...arrNum].filter((item) => item<10)
}

console.log(addAndDilterNu([5, 10, 15, 20, 25],2));


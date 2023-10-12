/*
Ejercicio 226
Eliminar el Primer Elemento de un Array y Crear un Nuevo Array Invertido:

Entrada: Un array de números.
Salida: Un ejemplo sería:
Entrada: [1, 2, 3, 4, 5]
Salida: [5, 4, 3, 2, 1]
*/

const deleteElement = (arrNum) =>{

    arrNum.shift()
    return arrNum.reverse()
}

console.log(deleteElement([1, 2, 3, 4, 5]));



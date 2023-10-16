/*
Ejercicio 266
Eliminar Duplicados de un Array:

Entrada: Un array con elementos duplicados.
Salida: Un ejemplo sería:
Entrada: [1, 2, 2, 3, 4, 4, 5]
Salida: Set {1, 2, 3, 4, 5}
*/

const deleteSet = (arrNum) =>{

    return new Set(arrNum)
}

console.log(deleteSet([1, 2, 2, 3, 4, 4, 5]));


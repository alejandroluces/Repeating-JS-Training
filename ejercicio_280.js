/*
Ejercicio 280

Eliminar Elementos Repetidos de un Array de Números:
Entrada: Un array de números con duplicados.
Salida: Un ejemplo sería:
Entrada: [2, 4, 2, 6, 4, 8, 6, 10]
Salida: Set {2, 4, 6, 8, 10}
*/

const deleteNumRepeat = (arrNum) =>{

    return new Set(arrNum)
}

console.log(deleteNumRepeat([2, 4, 2, 6, 4, 8, 6, 10]));



/*
Ejercicio 166
Filtrar números pares de una matriz (array de arrays) de números y
mostrar los resultados en una matriz nueva:

Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]]
Salida: [[2, 4], [2], [6]]
*/

const filterPar = (arr) =>{

    return arr.map((item)=>item.filter((itemPar)=>itemPar%2===0))

}

console.log(filterPar([[2, 3, 4], [1, 2, 3], [5, 6, 7]]));

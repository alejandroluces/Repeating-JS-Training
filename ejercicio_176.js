/*
Ejercicio 176
Filtrar números impares de una matriz (array de arrays) de números y mostrar los resultados en una matriz nueva:
Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]]
Salida: [[3], [1, 3], [5, 7]]

*/

const filterNumImpar = (arrNum) =>{

    return arrNum.map((item) => item.filter((itemFilt) => itemFilt%2!==0 ))

}

console.log(filterNumImpar([[2, 3, 4], [1, 2, 3], [5, 6, 7]]));

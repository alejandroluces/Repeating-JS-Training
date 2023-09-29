/*
Ejercicio 175
Filtrar subarrays que contengan un elemento específico de una matriz 
de arrays de números y mostrar los resultados en una matriz nueva:

Entrada: [[1, 2, 3], [4, 5], [6, 7, 8, 9]] y elemento para filtrar 5
Salida: [[4, 5]]
*/

const filterNumber = (arrNumbers,numFilter) =>{

    // return arrNumbers.map((item)=>item.filter((item) => item===5))
    // return arrNumbers.map((item)=>item.filter((item)=>item.includes(numFilter)))
    return arrNumbers.filter((item) => item.includes(numFilter))
    

    

}
console.log(filterNumber([[1, 2, 3], [4, 5], [6, 7, 8, 9]],5));

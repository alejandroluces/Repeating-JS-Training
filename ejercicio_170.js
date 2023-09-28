/*
Ejercicio 170
Filtrar subarrays de números que tengan una longitud específica de una matriz de 
arrays de números y mostrar los resultados en una matriz nueva:

Entrada: [[1, 2, 3], [4, 5], [6, 7, 8, 9]] (filtrar subarrays de longitud 3)
Salida: [[1, 2, 3], [6, 7, 8, 9]]
*/

const filteArrLength = (arrNumbers) =>{

    return arrNumbers.filter((itemFilt)=>itemFilt.length>=3)

}

console.log(filteArrLength([[1, 2, 3], [4, 5], [6, 7, 8, 9]], 3));

/*
 Ejercicio 180
Filtrar subarrays de números que no tengan una longitud específica de una matriz de arrays de 
números y mostrar los resultados en una matriz nueva:
Entrada: [[1, 2, 3], [4, 5], [6, 7, 8, 9]] (filtrar subarrays de longitud 2)
Salida: [[1, 2, 3], [6, 7, 8, 9]]

*/

const findArr = (numbers,num) =>{

    return numbers.filter((item)=>item.length>num)
}

console.log(findArr([[1, 2, 3], [4, 5], [6, 7, 8, 9]],2));



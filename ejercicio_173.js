/*
Ejercicio 173
Filtrar elementos que sean divisibles por un número dado de 
una matriz de números y mostrar los resultados en una matriz nueva:

Entrada: [[2, 3, 4, 6], [5, 10, 15], [1, 4, 7]] y número para filtrar 3
Salida: [[3, 6], [15], []]
*/

const filterArrNumbers = (arrNumbers,num) =>{

    return arrNumbers.map((item)=> item.filter((itemFilt)=> itemFilt%3===0))


}

console.log(filterArrNumbers([[2, 3, 4, 6], [5, 10, 15], [1, 4, 7]],3));

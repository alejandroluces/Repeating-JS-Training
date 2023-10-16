/*
Ejercicio 251
Buscar un Elemento en un Array:

Entrada: Un array y un elemento a buscar.
Salida: Un ejemplo sería:
Entrada: [1, 2, 3, 4, 5], 3
Salida: true
*/

const searchNum = (arr,num) =>{

    return arr.includes(num)

}
console.log(searchNum([1, 2, 3, 4, 5], 3));

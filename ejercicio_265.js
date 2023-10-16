/*
Ejercicio 265
Encontrar un Elemento en un Conjunto:

Entrada: Un conjunto (Set) y un elemento a buscar.
Salida: Un ejemplo sería:
Entrada: new Set([1, 2, 3, 4, 5]), 3
Salida: true
*/

const searchElement = (numSet,num) =>{

    return Array.from(numSet).includes(num)
}

console.log(searchElement(new Set([1, 2, 4, 3, 5]), 3));


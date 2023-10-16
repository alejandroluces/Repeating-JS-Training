/*
Ejercicio 262
Buscar un Valor en un Array Bidimensional:

Entrada: Un array bidimensional y un valor a buscar.
Salida: Un ejemplo sería:
Entrada: [[1, 2], [3, 4], [5, 6]], 3
Salida: true
*/
const searchNum = (arr,num) => {

    return arr.flat().includes(num)
}
console.log(searchNum([[1, 2], [1, 4], [3, 6]],3));




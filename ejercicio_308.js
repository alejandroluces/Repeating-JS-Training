/*
Ejercicio 308
Ordenación de un array de números:

Planteamiento: Ordena un array de números en orden ascendente y únelos en una cadena.
Ejemplo de entrada: [5, 2, 8, 1, 9]
Ejemplo de salida: "1 2 5 8 9"
*/

const arrNum = [5, 2, 8, 1, 9]

const orderNumbers = (arr) =>{

    return arr.sort((a,b) => a>b ? 1 : -1).join(" ")

}
console.log(orderNumbers(arrNum));



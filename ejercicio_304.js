/*
Ejercicio 304
Filtrado de valores en un array:

Planteamiento: Filtra los valores pares de un array y únelos en una cadena.
Ejemplo de entrada: [1, 2, 3, 4, 5]
Ejemplo de salida: "2 4"
*/
const filterValuePar = (arr) =>{

    return arr.filter((item) => item%2===0).join(" ")

}

console.log(filterValuePar([1, 2, 3, 4, 5]));

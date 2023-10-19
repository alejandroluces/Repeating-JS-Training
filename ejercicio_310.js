// Ejercicio 310
// Combinación de arrays:

// Planteamiento: Combina dos arrays en uno nuevo utilizando 
// concat() y únelos en una cadena.
// Ejemplo de entrada: [1, 2] y [3, 4]
// Ejemplo de salida: "1,2,3,4"

const arrOne = [1, 2]
const arrTwo = [3, 4]

const merchArr = (arr1,arr2) =>{

    return [...arr1,...arr2].join(",")
}

console.log(merchArr(arrOne,arrTwo));

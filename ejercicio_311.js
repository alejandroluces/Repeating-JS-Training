/*
Ejercicio 311
Extracción de valores únicos de un array:

Planteamiento: Extrae los valores únicos de un array y únelos en una cadena.
Ejemplo de entrada: [1, 2, 2, 3, 3, 4]
Ejemplo de salida: "1 2 3 4"
*/

const converStrNumbers = (arrNumbers) =>{

    let newSet = new Set(arrNumbers)
    return Array.from(newSet).join(" ")
}
console.log(converStrNumbers([1, 2, 2, 3, 3, 4]));

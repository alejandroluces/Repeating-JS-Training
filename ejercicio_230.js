/*
Ejercicio 230
Eliminar el Primer Elemento de un Array y Crear un Nuevo Array de Longitudes de Palabras:

Entrada: Un array de palabras.
Salida: Un ejemplo sería:
Entrada: ["manzana", "banana", "kiwi"]
Salida: [7, 6, 4]

*/

const arrFruits = ["manzana", "banana", "kiwi"]

const deleteFirshElement = (arr) =>{

    arr.shift()
    return arr.map((item)=> item.length)
}

console.log(deleteFirshElement(arrFruits));


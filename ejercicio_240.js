/*
Ejercicio 240
Agregar Elementos al Principio de un Array y Crear un Nuevo Array de Longitudes de Palabras:

Entrada: Un array de palabras.
Salida: Un ejemplo sería:
Entrada: ["manzana", "banana", "kiwi"] (Agregar "plátano" al principio)
Salida: [7, 6, 4, 6]
*/

const fruits = ["manzana", "banana", "kiwi"]
const addFruit = "plátano"

const fruitsLenth = (fr, addfr) =>{

    // return [addFruit, ...fr].map((item) => item.length)
    
    fr.unshift(addFruit)
    return fr.map((item) =>item.length)

}

console.log(fruitsLenth(fruits,addFruit));

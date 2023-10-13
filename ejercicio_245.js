/*
Ejercicio 245
Agregar Elementos al Principio de un Array de Texto y
 Crear un Nuevo Array de Elementos Ordenados Alfabéticamente:

Entrada: Un array de palabras.
Salida: Un ejemplo sería:
Entrada: ["perro", "gato", "elefante", "cabra"] (Agregar "águila" y "avión" al principio)
Salida: ["águila", "avión", "cabra", "elefante", "gato", "perro"]
*/

const listAnimals = ["perro", "gato", "elefante", "cabra"]
const addAnimals = ["águila", "avión"]

const aggNewAnimals = (animals, addAnim) =>{

    // return [...addAnim,...animals].sort((a,b) =>a>b ? 1 : -1)

    animals.unshift(addAnim)
    return animals.flat().sort((a,b) => a > b ? 1 :-1)

}

console.log(aggNewAnimals(listAnimals,addAnimals));



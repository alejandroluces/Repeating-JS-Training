/*
Ejercicio 249
Agregar Elementos al Principio de un Array de Texto y Crear un Nuevo Array con Elementos en Minúsculas:

Entrada: Un array de palabras en mayúsculas.
Salida: Un ejemplo sería:
Entrada: ["HOLA", "MUNDO", "JAVASCRIPT"] (Agregar "ADIOS" al principio)
Salida: ["adios", "HOLA", "MUNDO", "JAVASCRIPT"]
*/

const arrWords= ["HOLA", "MUNDO", "JAVASCRIPT"]
const addWord= "ADIOS"

const addNewWord = (arr,word) =>{

    let newWord =word.toLowerCase()
    return [newWord,...arr]


    // let newWord =word.toLowerCase()
    // arr.unshift(newWord)
    // return arr

}

console.log(addNewWord(arrWords,addWord));



/*
Ejercicio 229
Eliminar el Primer Elemento de un Array y Crear un Nuevo Array con Elementos en Mayúsculas:

Entrada: Un array de palabras en minúsculas.
Salida: Un ejemplo sería:
Entrada: ["hola", "mundo", "javascript"]
Salida: ["HOLA", "MUNDO", "JAVASCRIPT"]

*/

const arrWords =  ["hola", "mundo", "javascript"]

const wordsDeleteAndTolowercase = (arr) =>{

    arr.shift()
    return arr.join().toUpperCase().split(",")
}

console.log(wordsDeleteAndTolowercase(arrWords));



/*
Ejercicio 239
Agregar Elementos al Principio de un Array y Crear un Nuevo Array con Elementos en Mayúsculas:

Entrada: Un array de palabras en minúsculas.
Salida: Un ejemplo sería:
Entrada: ["hola", "mundo", "javascript"] (Agregar "hola" al principio)
Salida: ["HOLA", "hola", "mundo", "javascript"]
*/

const agregarWords = (arrWords,words) =>{
 
   let wordsMay=words.toUpperCase()
   return [wordsMay,...arrWords]

}

console.log(agregarWords(["hola", "mundo", "javascript"],"hola"));



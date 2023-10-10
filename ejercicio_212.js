/*
Ejercicio 212
Convertir un Array de Palabras en una Oración:

Entrada: Un array de palabras.
Salida: Un ejemplo sería:
Entrada: ["Hola", "esto", "es", "un", "ejemplo"]
Salida: "Hola esto es un ejemplo"
*/

const convertArrInString = (arrWords) =>{

    return arrWords.join(" ")

}

console.log(convertArrInString(["Hola", "esto", "es", "un", "ejemplo"]));

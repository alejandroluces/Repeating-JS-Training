/*
Ejercicio 279
Extraer Palabras Distintas de un Texto Largo:

Entrada: Un texto largo (cadena de texto).
Salida: Un ejemplo sería:
Entrada: "Este es un ejemplo de texto largo con muchas palabras. Este texto tiene muchas palabras."
Salida: Set de palabras únicas en el texto largo.
*/
const paragraph = "Este es un ejemplo de texto largo con muchas palabras. Este texto tiene muchas palabras."

const strParagraph = (str) =>{

    let separaPalabras = str.split(" ")
    
    return new Set (separaPalabras)
}
console.log(strParagraph(paragraph));


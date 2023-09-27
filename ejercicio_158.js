/*
Ejercicio 158
Concatenar todas las cadenas de texto en una matriz de arrays de cadenas de texto, 
separando cada subarray con un espacio:

Entrada: [["Hola", "Mundo"], ["Buenos", "Días"], ["Adiós", "Noche"]]
Salida: "Hola Mundo Buenos Días Adiós Noche"

*/

const concatWord = (arr) =>{

    return arr.flat().join(" ")

} 

console.log(concatWord([["Hola", "Mundo"], ["Buenos", "Días"], ["Adiós", "Noche"]]));

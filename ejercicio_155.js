/*

Ejercicio 155
Concatenar todos los subarrays de cadenas de texto en una sola cadena de texto,
 separando cada subarray con un guión:

Entrada: [["Hola", "Mundo"], ["Buenos", "Días"], ["Adiós", "Noche"]]
Salida: "Hola-Mundo-Buenos-Días-Adiós-Noche"

*/

const concatArrWords = (words) =>{

    return words.flat().join("-")

}

console.log(concatArrWords([["Hola", "Mundo"], ["Buenos", "Días"], ["Adiós", "Noche"]]));

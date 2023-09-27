/*
Ejercicio 151
Concatenar todos los subarrays de cadenas de texto en una sola matriz (array de cadenas):

Entrada: [["Hola", "Mundo"], ["Buenos", "Días"], ["Adiós", "Noche"]]
Salida: ["Hola", "Mundo", "Buenos", "Días", "Adiós", "Noche"]
*/

const concatArrWords = (arrWords) =>{

    return arrWords.flat()

}

console.log(concatArrWords([["Hola", "Mundo"], ["Buenos", "Días"], ["Adiós", "Noche"]]));

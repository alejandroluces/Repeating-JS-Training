/*
Ejercicio 273
Extraer Palabras Distintas de una Lista de Frases:

Entrada: Un array de frases (cadenas de texto).
Salida: Un ejemplo sería:
Entrada: ["Hola, cómo estás?", "Estoy bien.", "Hola, cómo estás?"]
Salida: Set {"Hola, cómo estás?", "Estoy bien."}
*/

const oneArrStr = ["Hola, cómo estás?", "Estoy bien.", "Hola, cómo estás?"]

const createNewSet = (arrStr) =>{

    return new Set(arrStr)
}

console.log(createNewSet(oneArrStr));


/*
Ejercicio 268
Crear un Conjunto de Letras Únicas en un Texto:

Entrada: Una cadena de texto.
Salida: Un ejemplo sería:
Entrada: "programación"
Salida: Set {"p", "r", "o", "g", "a", "m", "c", "i", "ó", "n"}
*/

const deletIfIsDuplicate = (str) => {

    
    
    let change = new Set (str)
    console.log(change);
    
    return Array.from(change).join("")

}

console.log(deletIfIsDuplicate("programación"));



/*
Ejercicio 276
Crear un Conjunto de Letras Iniciales en un Conjunto de Palabras:

Entrada: Un conjunto (Set) de palabras.
Salida: Un ejemplo sería:
Entrada: Set {"manzana", "banana", "pera", "uva"}
Salida: Set {"m", "b", "p", "u"}
*/
const setWords = new Set(["manzana", "banana", "pera", "uva"]);

const setInic = (setLetter) =>{

    let returnInitial = Array.from(setLetter).map((item) => item[0])
    return new Set(returnInitial)
}

console.log(setInic(setWords));


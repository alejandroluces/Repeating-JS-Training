// 8) Planteamiento: Verificar si una letra ingresada es una vocal o una consonante.
// Entrada: Un caracter (letra).
// Salida: "Es una vocal" si la letra es "a", "e", "i", "o" o "u", o "Es una consonante" si no lo es.

const validateLetter = (letter) =>{

    return letter.match(/[aeiou]/gi) ? true :  false

}

console.log(validateLetter("a"));

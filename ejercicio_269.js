/*
	11) Ejercicio: Verificar si una cadena contiene las letras 'a' y 'b'
Planteamiento: Escribe una función que tome como entrada una cadena y 
determine si contiene las letras 'a' y 'b'.
Entrada: Una cadena, por ejemplo: "casa blanca"
Salida: true si la cadena contiene las letras 'a' y 'b', false en caso contrario.
*/

const validateLetter = (str) =>{

    return str.includes("a") && str.includes("b")

}
console.log(validateLetter("casa blanca"));


/*
Ejercicio 269
Extraer Palabras Únicas de un Párrafo:

Entrada: Una cadena de texto que representa un párrafo.
Salida: Un ejemplo sería:
Entrada: "JavaScript es un lenguaje de programación. JavaScript es versátil."
Salida: Set {"JavaScript", "es", "un", "lenguaje", "de", "programación", "versátil"}
 */

const paragraph = "JavaScript es un lenguaje de programación. JavaScript es versátil."

const addNewSet = (str) =>{

    let ajusStr = str.split(" ")
    return new Set(ajusStr)
}

console.log(addNewSet(paragraph));

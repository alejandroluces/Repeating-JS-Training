/*
Ejercicio 294
Crear un Array de Palabras Únicas a partir de un Texto Largo:
	Entrada: Un texto largo (cadena de texto).
	Salida: Un ejemplo sería:
		Entrada: "Este es un ejemplo de texto largo con muchas palabras. Este texto tiene muchas palabras."
Salida: ['Este', 'es', 'un', 'ejemplo', 'de', 'texto', 'largo', 'con', 'muchas', 'palabras.']

*/

const strWords = "Este es un ejemplo de texto largo con muchas palabras. Este texto tiene muchas palabras."
const createWordsUnic = (str) =>{

    const separateWords = str.split(" ")
    let deleteDuplicate= new Set(separateWords)
    return Array.from(deleteDuplicate)
}

console.log(createWordsUnic(strWords));

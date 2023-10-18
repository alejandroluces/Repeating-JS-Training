/*
Ejercicio 284
Crear un Array a partir de una Cadena de Texto:
	Entrada: Una cadena de texto.
	Salida: Un ejemplo sería:
		Entrada: "JavaScript"
Salida: ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']
*/

let cadena = "JavaScript";

const converToArray = (arr) =>{

    // return arr.split("")
    return Array.from(cadena)
}

console.log(converToArray(cadena));


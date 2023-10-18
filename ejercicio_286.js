
/*
Ejercicio 286
Crear un Array de Palabras a partir de una Cadena de Texto:
	Entrada: Una cadena de texto con palabras separadas por espacios.
	Salida: Un ejemplo sería:
		Entrada: "Esto es un ejemplo"
Salida: ['Esto', 'es', 'un', 'ejemplo']
*/

const cadena = "Esto es un ejemplo";

const converArr = (str) =>{

    return str.split(" ")
}

console.log(converArr(cadena));


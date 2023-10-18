
/*
Ejercicio 285
Convertir una Lista de Números en un Array:
	Entrada: Una lista de números separados por comas.
	Salida: Un ejemplo sería:
		Entrada: "1, 2, 3, 4, 5"
Salida: [1, 2, 3, 4, 5]
*/

const numbers = "1, 2, 3, 4, 5"
const converArr = (str) => {

    return str.split()
    // return str.split()
    // return Array.from(numbers)
    // return str.split(", ")
}

console.log(converArr(numbers));


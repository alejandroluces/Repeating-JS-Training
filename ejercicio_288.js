/*
Ejercicio 288
Crear un Array de Caracteres Únicos a partir de una Cadena de Texto:
	Entrada: Una cadena de texto.
	Salida: Un ejemplo sería:
		Entrada: "repetición"
Salida: ['r', 'e', 'p', 't', 'i', 'ó', 'n']
*/

const strConver = "repetición"

const converChartUni = (str) =>{

    let newSet = new Set(strConver)
    return Array.from(newSet)

}
console.log(converChartUni(strConver));

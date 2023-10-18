/* 
Ejercicio 296
Crear un Array de Iniciales de Nombres a partir de una Lista de Nombres:
	Entrada: Un array de nombres.
	Salida: Un ejemplo sería:
		Entrada: ["Ana", "Juan", "María", "Carlos"]
Salida: ['A', 'J', 'M', 'C']
*/

const arrNames = ["Ana", "Juan", "María", "Carlos"]

const findInitialName = (names) =>{

    return names.map((item) => item[0])
}

console.log(findInitialName(arrNames));

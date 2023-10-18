/*
Ejercicio 298
Crear un Array de Ítems Únicos a partir de una Lista de Ítems Repetidos:
	Entrada: Un array que contiene ítems repetidos.
	Salida: Un ejemplo sería:
		Entrada: ['Manzana', 'Banana', 'Manzana', 'Pera', 'Banana']
Salida: ['Manzana', 'Banana', 'Pera']
*/

const arrFruits = ['Manzana', 'Banana', 'Manzana', 'Pera', 'Banana']

const deleteFruitRepeat = (fruits) =>{

    let newSet = new Set(fruits)
    return Array.from(newSet)
    
}

console.log(deleteFruitRepeat(arrFruits));



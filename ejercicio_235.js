
/*
Ejercicio 235
Eliminar el Primer Elemento de un Array de Texto y Crear un 
Nuevo Array de Elementos Ordenados Alfabéticamente:

Entrada: Un array de palabras.
Salida: Un ejemplo sería:
Entrada: ["perro", "gato", "elefante", "cabra"]
Salida: ["cabra", "elefante", "gato", "perro"]
*/

const arrAnimals = ["perro", "gato", "elefante", "cabra"]

const deletFirshElementAndOrder = (arr) =>{

    return arr.splice(1).sort((a,b) => a>b ? 1 : -1)

}
console.log(deletFirshElementAndOrder(arrAnimals));

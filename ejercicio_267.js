/*
Ejercicio 267
Eliminar Duplicados de una Lista de Nombres:

Entrada: Un array de nombres con duplicados.
Salida: Un ejemplo sería:
Entrada: ["Ana", "Juan", "Juan", "María", "Carlos", "Ana"]
Salida: Set {"Ana", "Juan", "María", "Carlos"}
*/

const deleteSet = (arrName) =>{

    return new Set(arrName)
}

console.log(deleteSet(["Ana", "Juan", "Juan", "María", "Carlos", "Ana"]));





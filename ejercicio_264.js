/*
Ejercicio 264
Buscar un Nombre en una Lista de Amigos:

Entrada: Un objeto que contiene una lista de amigos y un nombre a buscar.
Salida: Un ejemplo sería:
Entrada: { amigos: ["Ana", "Juan", "María", "Carlos"] }, "Juan"
Salida: true
*/

const validateListFriens = (list,friend) =>{

    return Object.values(list).flat().includes(friend)
    
}

console.log(validateListFriens({ amigos: ["Ana", "Juan", "María", "Carlos"] },"Carlos"));



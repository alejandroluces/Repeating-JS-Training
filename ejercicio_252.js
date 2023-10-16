/*
Ejercicio 252
Verificar si un Nombre está en una Lista:

Entrada: Un array de nombres y un nombre a buscar.
Salida: Un ejemplo sería:
Entrada: ["Ana", "Juan", "María", "Carlos"], "María"
Salida: true
*/


const searchName = (arrName, name) =>{

    return arrName.includes(name)

}
console.log(searchName(["Ana", "Juan", "María", "Carlos"], "María"));

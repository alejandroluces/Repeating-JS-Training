/*
Ejercicio 242
Agregar Elementos al Principio de un Array de Objetos y Crear un Nuevo Array con Nombres:

Entrada: Un array de objetos que representan personas.
Salida: Un ejemplo sería:
Entrada: [{ nombre: "Ana" }, { nombre: "Juan" }, { nombre: "María" }] (Agregar { nombre: "Pedro" } al principio)
Salida: ["Pedro", "Ana", "Juan", "María"]

*/
const people = [
                { nombre: "Ana" },  
                { nombre: "Juan" }, 
                { nombre: "María" }
]

const addName = (nameObj,newName) => {

// return [newName,...nameObj].map((item) => item.nombre)

    nameObj.unshift(newName)
    return nameObj.map((item) => item.nombre)

}

console.log(addName(people,{ nombre: "Pedro" }));


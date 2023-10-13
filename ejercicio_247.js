/*
Ejercicio 247
Agregar Elementos al Principio de un Array de Objetos y Crear un 
Nuevo Array con Nombres y Edades Mayores de 30:

Entrada: Un array de objetos que representan personas.
Salida: Un ejemplo sería:
Entrada: [{ nombre: "Ana", edad: 25 }, { nombre: "Juan", edad: 30 }, { nombre: "María", edad: 35 }] (Agregar { nombre: "Pedro", edad: 40 } al principio)
Salida: ["Juan", "María"]
*/

const arrObjNameAge = [
        { nombre: "Ana", edad: 25 }, 
        { nombre: "Juan", edad: 30 }, 
        { nombre: "María", edad: 35 }
    ]

const addObj = { nombre: "Pedro", edad: 40 }

const addObjAndName = (arrName,nameObj) =>{

    return [nameObj,...arrName].filter((item) => item.edad>30).map((item) => item.nombre)

}

console.log(addObjAndName(arrObjNameAge,addObj));



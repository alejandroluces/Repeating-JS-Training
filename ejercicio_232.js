/*
Ejercicio 232
Eliminar el Primer Elemento de un Array de Objetos y Crear un Nuevo Array con Nombres:

Entrada: Un array de objetos que representan personas.
Salida: Un ejemplo sería:
Entrada: [{ nombre: "Ana" }, { nombre: "Juan" }, { nombre: "María" }]
Salida: ["Juan", "María"]

*/


const arrPeople = [{ nombre: "Ana" }, { nombre: "Juan" }, { nombre: "María" }]

const deletFirshName = (arr) =>{

    // arr.shift()
    // return arr.map((item) => item.nombre)

    //Otra Forma
    // return arr.map((item) => item.nombre).slice(1)
    //Otra Forma
    return arr.map((item) => item.nombre).filter((item,index) => index>0)

}

console.log(deletFirshName(arrPeople));


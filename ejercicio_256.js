/*
Ejercicio 256
Detectar un Valor en un Array de Objetos:

Entrada: Un array de objetos y un valor a buscar en una propiedad específica de los objetos.
Salida: Un ejemplo sería:
Entrada: [{ nombre: "Juan" }, { nombre: "María" }, { nombre: "Carlos" }], "nombre", "María"
Salida: true
*/


const arrObjName = (arr, name) =>{

    return arr.map((item) => item.nombre).includes(name)
}

console.log(arrObjName([{ nombre: "Juan" }, { nombre: "Maria" }, { nombre: "Carlos" }],"Maria"));

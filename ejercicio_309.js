/*
Ejercicio 309
Unión de nombres de propiedades de un objeto:

Planteamiento: Toma un objeto y únelos en una cadena 
todos los nombres de sus propiedades.
Ejemplo de entrada: {nombre: "Luis", edad: 25, ciudad: "Madrid"}
Ejemplo de salida: "nombre edad ciudad"
*/

const converStr = (obj) =>{

    return Object.keys(obj).join(" ")
}

console.log(converStr({nombre: "Luis", edad: 25, ciudad: "Madrid"}));



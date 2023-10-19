/*
Ejercicio 312
Creación de una lista de propiedades:

Planteamiento: Toma un objeto y crea una lista de sus propiedades
, luego únelas en una cadena.
Ejemplo de entrada: {nombre: "Ana", edad: 28, ciudad: "Barcelona"}
Ejemplo de salida: "nombre, edad, ciudad"
*/
const merchList = (obj) =>{

    let convertArr= Object.keys(obj)
    return convertArr.join(" ")
}

console.log(merchList({nombre: "Ana", edad: 28, ciudad: "Barcelona"}));

/*
Ejercicio 215
Crear una Cadena de Búsqueda a partir de un Objeto:

Entrada: Un objeto con pares clave-valor.
Salida: Un ejemplo sería:
Entrada: { nombre: "Ana", edad: 25, ciudad: "Los Ángeles" }
Salida: "nombre=Ana&edad=25&ciudad=Los Ángeles"

*/

const createSearchString = (obj) =>{

    // return Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&')
    return Object.entries(obj).map(([item, value])=>` ${item}= ${value}`).join("&")
}

console.log(createSearchString({ nombre: "Ana", edad: 25, ciudad: "Los Ángeles" }));


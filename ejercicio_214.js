/*
Ejercicio 214
Convertir un Objeto en una Cadena de Texto:

Entrada: Un objeto con propiedades.
Salida: Un ejemplo sería:
Entrada: { nombre: "Juan", edad: 30, ciudad: "Nueva York" }
Salida: "[object Object]" (a menos que se realice un procesamiento adicional).
*/

const converObjInStrinText = (obj) =>{

    return JSON.stringify(obj)
}

console.log(converObjInStrinText({ nombre: "Juan", edad: 30, ciudad: "Nueva York" }));


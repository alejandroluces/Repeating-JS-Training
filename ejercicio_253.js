/*
Ejercicio 253
Detectar la Existencia de una Clave en un Objeto:

Entrada: Un objeto y una clave a verificar.
Salida: Un ejemplo sería:
Entrada: { nombre: "Alice", edad: 30, ciudad: "Nueva York"}, "ciudad"
Salida: true
*/


const searchCity = (obj,key) =>{

    return Object.keys(obj).includes(key)
}

console.log(searchCity({ nombre: "Alice", edad: 30, ciudad: "Nueva York"}, "ciudad"));

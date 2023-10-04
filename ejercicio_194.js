/*
Ejercicio 194
Agregar un objeto al final de un array de objetos y devolver el nuevo array:

Entrada: [{nombre: "Juan"}, {nombre: "María"}] y objeto a agregar {nombre: "Carlos"}
Salida: [{nombre: "Juan"}, {nombre: "María"}, {nombre: "Carlos"}]
*/

const addObj = (arr, obj) => {
    arr.push(obj)
    return arr

}
console.log(addObj([{nombre: "Juan"}, {nombre: "María"}],{nombre: "Carlos"}));

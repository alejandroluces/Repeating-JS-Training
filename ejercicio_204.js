/*

Ejercicio 204
Agregar un objeto al inicio de un array de objetos y devolver el nuevo array:
Entrada: [{nombre: "Juan"}, {nombre: "María"}] y objeto a agregar {nombre: "Carlos"}
Salida: [{nombre: "Carlos"}, {nombre: "Juan"}, {nombre: "María"}]

 */

const addObjName = (arrName, addArr) =>{

    arrName.push(addArr)
    return arrName.sort((a,b) => a>b ? 1 : -1)

}

console.log(addObjName([{nombre: "Juan"}, {nombre: "María"}], {nombre: "Carlos"}));

/*
Ejercicio 208
Eliminar un objeto específico de un array de objetos y
 devolver el objeto eliminado junto con el nuevo array:

Entrada: [{nombre: "Juan"}, {nombre: "María"}, {nombre: "Carlos"}] y objeto a eliminar {nombre: "María"}
Salida: Objeto eliminado: {nombre: "María"}, Nuevo array: [{nombre: "Juan"}, {nombre: "Carlos"}]

*/

const deletteObj = (arr, objs) => {

    let newArr= arr.filter((item)=>item.nombre !== objs.nombre)
   {return{
    Nuevoarray: newArr,
    Objetoeliminado:

   }}
}

console.log(deletteObj([{nombre: "Juan"}, {nombre: "Maria"}, {nombre: "Carlos"}], {nombre: "Maria"}));

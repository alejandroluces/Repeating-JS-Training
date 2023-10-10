/*
Ejercicio 207
Eliminar varios elementos al final de un array de números y 
devolver los elementos eliminados junto con el nuevo array:
Entrada: [1, 2, 3, 4, 5] y cantidad a eliminar 3
Salida: Elementos eliminados: [3, 4, 5], Nuevo array: [1, 2]
*/


let array = [1, 2, 3, 4, 5];
let cantidad = 3;
const deleteLastElements = (arr, cant) => {

   let deleteNum= arr.slice(0,-cant)
   return `Elementos eliminados: ${arr.splice(-cant)}, Nuevo array: ${deleteNum}`

}

console.log(deleteLastElements(array,cantidad));

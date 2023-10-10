/*
Ejercicio 209
Eliminar todos los elementos duplicados de un array de números y 
devolver el nuevo array sin duplicados utilizando el método filter():
Entrada: [1, 2, 2, 3, 4, 4, 5]
Salida: [1, 2, 3, 4, 5]
*/

const arrSinDuplicate = (arr) =>{

    return arr.filter((item,index) =>  arr.indexOf(item) === index )

}

console.log(arrSinDuplicate([1, 2, 2, 3, 4, 4, 5]));
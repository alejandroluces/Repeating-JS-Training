/*
Ejercicio 205
Eliminar el último elemento de un array de números y devolver el 
elemento eliminado junto con el nuevo array:
Entrada: [1, 2, 3, 4, 5]
Salida: Elemento eliminado: 5, Nuevo array: [1, 2, 3, 4]
*/

const deleteLastElement = (arrNumbers) =>{

    // let delletNum = arrNumbers.pop()
    // let result = arrNumbers
    // result
    // return `Elemento eliminado: ${delletNum}, Nuevo array: ${result}`


    return `Elemento eliminado: ${arrNumbers.pop()}, Nuevo array: ${arrNumbers}`

   

}   

console.log(deleteLastElement([1, 2, 3, 4, 5]));


/*
Ejercicio 191
Agregar un elemento al final de un array de números y devolver el nuevo array:

Entrada: [1, 2, 3, 4] y elemento a agregar 5
Salida: [1, 2, 3, 4, 5]
*/

const addElemnt = (arrNumbers,numAdd) =>{
    // return [...arrNumbers,numAdd]
    // usando el metodo push
    // arrNumbers.push(numAdd)
    // return arrNumbers
    arrNumbers.push(numAdd)
    return arrNumbers
}

console.log(addElemnt([1, 2, 3, 4], 5));

/*
Ejercicio 196
Agregar un número al final de un array de números si no está presente y devolver el nuevo array:

Entrada: [1, 2, 3] y número a agregar 3
Salida: [1, 2, 3] (sin cambios)
*/

const addNum = (arr, num) => {

    // return arr.includes(num) ? arr : arr.concat(num)

    if (arr.includes(num)) {
        return arr
    }else{
        arr.push(num)
        return arr
    }
}

console.log(addNum([1, 2,5],3));

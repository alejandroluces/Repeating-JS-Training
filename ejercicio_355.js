/*
Ejercicio 355
Ejercicio 5: Crear una copia invertida de un Array

Entrada: [1, 2, 3, 4, 5], slice().reverse()
Salida: [5, 4, 3, 2, 1]

*/

const createArrIvert = (arrNum) =>{

    return arrNum.slice().reverse()
}

console.log(createArrIvert([1, 2, 3, 4, 5]));



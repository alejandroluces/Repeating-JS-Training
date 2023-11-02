/*
Ejercicio 351
Ejercicio 1: Extraer una porción de un Array

Entrada: [1, 2, 3, 4, 5], slice(1, 4)
Salida: [2, 3, 4]
*/

const extraeNumb = (arrNum) =>{

    return arrNum.slice(1,-1)

}

console.log(extraeNumb([1, 2, 3, 4, 5]));

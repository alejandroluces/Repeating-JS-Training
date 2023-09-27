/*
Ejercicio 146
Calcular la suma de todos los elementos en una matriz (array de arrays) de números:


Entrada: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Salida: 45
*/

const calculateSumNumbers = (arrOne,arrTwo,arrThree) =>{

    let concatArr = arrOne.concat(arrTwo,arrThree)
    return concatArr.reduce((a,b) => a+b)

}

console.log(calculateSumNumbers([1, 2, 3], [4, 5, 6], [7, 8, 9]));

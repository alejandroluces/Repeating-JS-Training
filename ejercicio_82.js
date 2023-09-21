/*

Ejercicio 82
Sumar dos arrays elemento por elemento:
Entrada: [1, 2, 3] y [4, 5, 6]
Salida: [5, 7, 9]

*/

const sumArr = (arrOne,arrTwo) =>{

    return arrOne.map((item,index)=>item+arrTwo[index])


}

console.log(sumArr([1, 2, 3, 2] , [4, 5, 6, 8]));

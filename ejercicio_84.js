/*

Ejercicio 84
Multiplicar elementos de dos arrays:
Entrada: [2, 3, 4] y [1, 2, 3]
Salida: [2, 6, 12]

*/

const multiplicateNumArr=(arrOne,arrTwo)=>{

    return arrOne.map((item,index)=>item*arrTwo[index])
}

console.log(multiplicateNumArr([2, 3, 4] , [1, 2, 3]));

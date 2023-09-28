/*
Ejercicio 161
Calcular la suma de las columnas en una matriz de números y mostrar los resultados en un nuevo array:

Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]]
Salida: [8, 11, 14]
*/

const sumMatr = (arrNum) =>{

    // return arrNum.reduce((a,b)=>a.map((item,index)=>item+b[index]))
    return arrNum.reduce((a,b)=>a.map((item,index)=>item+b[index]))

}

console.log(sumMatr([[2, 3, 4], [1, 2, 3], [5, 6, 7],[5, 6, 7]]));

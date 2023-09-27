/*
Ejercicio 152
Calcular el promedio de cada columna en una matriz de números y mostrar los resultados en un nuevo array:

Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]]
Salida: [3, 2, 6]

*/

const averageNumArr = (calcAverage) =>{

    return calcAverage.map((item,index) => calcAverage[index].reduce((a,b)=>a+b)/item.length )

}

console.log(averageNumArr([[2, 3, 4], [1, 2, 3], [5, 6, 7]]));

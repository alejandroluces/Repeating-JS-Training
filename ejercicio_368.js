/*
Ejercicio 368: Calcular el promedio de un Array de números

Entrada: [10, 20, 30, 40, 50]
Salida: 30
*/
const calculateAverage = (arr) =>{
    let result=0
    for (let i = 0 ; i< arr.length ; i++){
        result += arr[i]
    }
    return result/arr.length
}

console.log(calculateAverage([10, 20, 30, 40, 50]));

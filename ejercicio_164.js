/*
Ejercicio 164
Calcular la multiplicación de los elementos en una matriz de números, 
pero solo de aquellos que son mayores que un valor dado:

Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]] y valor mínimo 4
Salida: 84
*/

let matriz = [[2, 3,1], [1, 2, 3], [5, 6, 7]];
let min = 4;

const multMatriz = (matriz, min) => {
    // return matriz.reduce((a, b) => a.concat(b)).filter(item => item > min).reduce((a, b) => a * b);
    return matriz.flat().filter((item)=>item>min).reduce((a,b)=>a*b)
}

console.log(multMatriz(matriz, min));
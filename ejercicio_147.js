/*
Ejercicio 147
Encontrar el valor máximo en una matriz de números y su posición (índice de fila y columna):

Entrada: [[10, 5, 8], [4, 15, 7], [12, 9, 6]]
Salida: {maximo: 15, fila: 1, columna: 1}
*/

const searchNumMax = (arr) =>{return{
    maximo: arr.map((item, index, arr)=> Math.max(...item) ).reduce((a,b) =>a>b ?a:b),}
    
    
    
}
console.log(searchNumMax([[10, 5, 8], [4, 15, 7], [12, 9, 6]]));

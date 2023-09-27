/*

Ejercicio 159
Calcular el producto de los elementos en una matriz de números,
 pero ignorando los elementos que son cero (0):

Entrada: [[2, 3, 0], [0, 1, 4], [5, 6, 0]]
Salida: 720

*/

const calculateProdArr = (arrNum) =>{
    let reaplceCero= arrNum.flat().map((item)=>item===0?1:item)
    reaplceCero
    return reaplceCero.reduce((a,b)=>a*b)
    
   

}

console.log(calculateProdArr([[2, 3, 0], [0, 1, 4], [5, 6, 0]]));

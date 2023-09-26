/*

Ejercicio 116
Calcular la suma de todos los elementos en un array numérico:
- Entrada: [2, 4, 6, 8]
- Salida: 20

*/

const sumNum = (arrNum) =>{

    return arrNum.reduce ((a,b)=>a+b)

}

console.log(sumNum([2, 4, 6, 8]));

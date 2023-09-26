/*

Ejercicio 119
Calcular el producto de todos los elementos en un array numérico:
- Entrada: [2, 3, 4]
- Salida: 24

*/

const calculate = (arrNum) =>{

    return  arrNum.reduce((a,b)=>a*b)

}

console.log(calculate([2, 3, 4]));


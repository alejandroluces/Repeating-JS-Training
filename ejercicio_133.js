/*
Ejercicio 133
Calcular el producto de los elementos pares en un array numérico:
- Entrada: [2, 3, 4, 5, 6]
- Salida: 48
*/

const producElementPar = (arrNum) =>{

return  arrNum.filter ((item)=> item%2===0).reduce ((a,b) => a*b)

}

console.log(producElementPar([2, 3, 4, 5, 6]));

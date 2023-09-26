/*

Ejercicio 122
Encontrar el número mínimo en un array numérico:
- Entrada: [5, 3, 8, 2]
- Salida: 2

*/

const valMin = (arrNum) =>{

    // return Math.min(...arrNum)
    return  arrNum.sort().reduce ((a,b)=>a)


}
console.log(valMin([5, 3, 8, 2]));

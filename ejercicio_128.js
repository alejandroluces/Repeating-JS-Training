/*

Ejercicio 128
Calcular la media (promedio) de un array numérico:
- Entrada: [10, 20, 30, 40]
- Salida: 25

*/

const calculateAverage = (num) =>{

    return  num.reduce ((a,b) => a+b)/num.length

}
console.log(calculateAverage([10, 20, 30, 40]));

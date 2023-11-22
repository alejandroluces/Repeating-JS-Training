/*
Saltamontes - Media de matriz
1413993% de 2.4668.647 de 19.725danleavitt01 problema reportado
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
encontrar media
Encuentre la media (promedio) de una lista de números en una matriz.

Información
Para encontrar la media (promedio) de un conjunto de números, sume todos los números y divídalos por el número de valores de la lista.

Para ver una lista de ejemplo de1, 3, 5, 7

1. Suma todos los números

1+3+5+7 = 16
2. Divida por el número de valores de la lista. En este ejemplo hay 4 números en la lista.

16/4 = 4
3. La media (o promedio) de esta lista es 4
*/

const findAverage = (nums) =>{

    return nums.reduce((acc,ac)=> acc + ac)/nums.length
}

console.log(findAverage([1, 3, 5, 7]));
console.log(findAverage([3]));


/*
7 kyu
Números pares en una matriz
1464694% de 2.0227.130 de 14.756Dmitry Kudla1 problema reportado
 javascript
Nodo v8.1.3
EMPUJE
EMACS
Instrucciones
Producción
Dado un conjunto arrayde números, devuelve una nueva matriz de longitud numberque contiene los últimos números pares de la matriz original (en el mismo orden). La matriz original no estará vacía y contendrá al menos "números" pares.

Por ejemplo:
*/

const evenNumbers = (array, number) => {
    return array.filter((item)=>item%2===0).splice(-number)
  }

  console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
  console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
  



    
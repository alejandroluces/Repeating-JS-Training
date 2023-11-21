/*
Diferencia de volúmenes de cuboides
2919893% de 4.17016.550 de 44.906Esferixo
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
En este sencillo ejercicio, creará un programa que tomará dos listas de números enteros ay b. Cada lista constará de 3 números enteros positivos superiores a 0, que representan las dimensiones de los cuboides ay b. Debes encontrar la diferencia de volúmenes de los cuboides sin importar cuál sea mayor.

Por ejemplo, si los parámetros pasados ​​son ([2, 2, 3], [5, 4, 1]), el volumen de aes 12 y el volumen de bes 20. Por lo tanto, la función debería devolver 8.

Su función se probará con ejemplos prediseñados y aleatorios.

Si puedes, intenta escribirlo en una línea de código.
*/


const findDifference = (a, b) => {
    let resultA = a.reduce((acc,sc) => acc*sc )
    let resultB = b.reduce((acc,sc) => acc*sc )
    return Math.abs(resultA-resultB)

    //Otra solucion
    // return a.reduce((acc,sc) => acc*sc) !== b.reduce((acc,sc) => acc*sc ) ? Math.abs(a.reduce((acc,sc) => acc*sc ) - b.reduce((acc,sc) => acc*sc )): 0
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));
console.log(findDifference([11, 2, 5], [1, 10, 8]));
console.log(findDifference([4, 4, 7], [3, 9, 3]));
console.log(findDifference([15, 20, 25], [10, 30, 25]));
console.log(findDifference([15,14,6], [29,7,21]));




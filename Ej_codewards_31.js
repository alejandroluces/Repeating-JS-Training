/*
Suma cuadrada (n)
136033192% de 16,35284.168 de 229.516jhoffner1 problema reportado
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
Complete la función de suma cuadrada para que cuadre cada número que se le pasa y luego sume los resultados.

Por ejemplo, [1, 2, 2]debería regresar 9porque
Por ejemplo, [1, 2, 2]debería regresar 9porque 1 2 + 2 2 + 2 2 = 9 1 2 +2 2 +2 2 =9.
https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
*/


const squareSum = (numbers) =>{

    return numbers.map((item) => item**2).reduce((acc,ac) => acc + ac, 0)

}

console.log(squareSum([1,2]));
console.log(squareSum([0, 3, 4, 5]));


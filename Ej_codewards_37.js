/*
Es n divisible por xey?
51817792% de 10,31044.354 de 110.604naaz
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
Crea una función que verifique si un número nes divisible por dos números x AND y . Todas las entradas son números positivos distintos de cero.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 
*/

const isDivisible = (n, x, y) => {
    return n%x===0 && n%y===0
}

console.log(isDivisible(3,3,4));
console.log(isDivisible(12,3,4));

/*

Cree una función que verifique si el primer argumento n es divisible por todos los demás argumentos (devuelve verdadero si no hay otros argumentos)

Ejemplo:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7

*/

const divisibleBy = (n, ...args) => {
    if (args.length === 0) return true;
    return args.every((arg) => n % arg === 0);
    }
    console.log(divisibleBy(6,1,3));
    console.log(divisibleBy(12,2));
    console.log(divisibleBy(100,5,4,10,25,20));
    console.log(divisibleBy(12,7));
    

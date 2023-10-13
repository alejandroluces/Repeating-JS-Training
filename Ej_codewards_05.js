/*
Cree una función que tome un número entero como 
argumento y devuelva números "Even"pares o "Odd"impares.

MATEMÁTICASFUNDAMENTOS
*/

const evenOrOdd = (number) =>{

    return number%2 !==0 ? "Odd": "Even"

}

console.log(evenOrOdd(2));
console.log(evenOrOdd(9));

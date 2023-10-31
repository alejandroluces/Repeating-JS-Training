//   8 kyu
// Encuentra números que son divisibles por un número dado.
// 29011193% de 4.32816.702 de 34.401XxxX881 problema reportado
//  javascript
// Nodo v18.x
// EMPUJE
// EMACS
// Instrucciones
// Producción
// Soluciones pasadas
// Complete la función que toma dos argumentos y devuelve todos los números que son divisibles por el divisor dado. El primer argumento es una matriz de numbersy el segundo es divisor.

// Ejemplo (Entrada1, Entrada2 --> Salida)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

const divisibleBy = (numbers, divisor) =>{
    return  numbers.filter((item)=> item%divisor===0)
    }

    console.log(divisibleBy([1,2,3,4,5,6], 2));
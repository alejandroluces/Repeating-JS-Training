/*
Agregar nuevo artículo (las colecciones se pasan por referencia)
Agregue un elemento a la lista:

El método AddExtra agrega un nuevo elemento a la lista y devuelve la lista. El nuevo elemento puede ser cualquier objeto y no importa. (digamos que agregas un valor entero, como 13)

En nuestro caso de prueba, verificamos para asegurarnos de que la lista devuelta tenga un elemento más que la lista de entrada. Sin embargo, el método necesita algunas modificaciones para pasar esta prueba.

PD: Tienes que crear una nueva lista y agregarle un nuevo elemento. (Este Kata está diseñado originalmente para el lenguaje C# y muestra que agregar un nuevo elemento a la lista de entrada no funcionará, aunque el parámetro se pase por valor, pero el valor apunta a la referencia de la lista y a cualquier cambio en El parámetro será visto por la persona que llama)
https://www.codewars.com/kata/566dc05f855b36a031000048/train/javascript

*/

const addExtra = ( listOfNumbers ) => {
    let result=listOfNumbers
    result.push(listOfNumbers.length+1)
    return result
}

console.log(addExtra([1,2,3,4]));
console.log(addExtra([1,2]));



function isDigit(s) {
    let result = [...s].every((item) => Number(item))
    return Math.abs(result)
  }

  console.log(isDigit("-234.4"));
  




/*
Ejercicio 335
 Comprobar si todos los elementos de un Array son strings

Entrada: ['manzana', 'pera', 'naranja', 42]
Salida: false
*/

const validateArr = (arr) =>{

    return arr.every((item) => typeof item === "string")
}

console.log(validateArr(['manzana', 'pera', 'naranja', 42]));


// const palabras = ['Corazon', 'oso', 'radar', 'salas', 'Anilina'];

// const validatePalindromo = (arrWords) =>{
// return arrWords.map((item)=> item.toLowerCase()=== item.toLowerCase().split("").reverse().join("") ?`La palabra ${item} Es Palindromo` : `La palabra ${item} No Es Palindromo`)

// }

// console.log(validatePalindromo(palabras));

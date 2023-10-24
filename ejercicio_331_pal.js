
const palabras = ['Corazon', 'oso', 'radar', 'salas', 'Anilina'];


const validatePalidrome = (arrWords) =>{

    return arrWords.map((item)=> item.toLowerCase() === item.toLowerCase().split("").reverse().join('') ? `La palabra ${item} es palindromo` : `La palabra ${item} NO es palindromo`);
 
}

console.log(validatePalidrome(palabras));

/*
Ejercicio 331
 Validar si todos los elementos de un Array son números pares

Entrada: [2, 4, 6, 8, 10]
Salida: true
*/

const validateNumPar = (arrNum) =>{

    return arrNum.every(item=>item%2===0)
}

console.log(validateNumPar([2, 4, 6, 8, 10]));

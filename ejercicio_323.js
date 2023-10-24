/*
Ejercicio 323
Verificar si un Array de strings contiene una palabra específica

Entrada: ['manzana', 'pera', 'uva', 'naranja']
Salida: true
*/

const validateWords = (arr) =>{

    return arr.some((item) => item==="uva")
}

console.log(validateWords(['manzana', 'pera', 'uva', 'naranja']));

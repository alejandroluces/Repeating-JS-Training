/*
Ejercicio 362: Encontrar el número más grande en un Array

Entrada: [12, 45, 8, 27, 36]
Salida: 45
*/

const searchValMax = (arr) =>{
    // Se creo una variable en cero para almacenar la suma de la matriz
    let result=0;
    // Se creo un blucle for para recorrer el array
    for (let i= 0 ; i<arr.length ; i++){
    //Se creo un condicional para comparar los elementos del array y obtener el mayor  
        result = Math.max(...arr)
    }
    // Se retorno el resultado 
    return result
} 

console.log(searchValMax([12, 45, 8, 27, 36]));

// Ejercicio 259
// Comprobar si Todos los Elementos Cumplen un Requisito:

// Entrada: Un array de números y una función de prueba.
// Salida: Un ejemplo sería:
// Entrada: [2, 4, 6, 8, 10], (num) => num % 2 === 0
// Salida: true


const validateNum = (arr,fn) =>{


    // return arr.map(fn).includes(false) ? false : true;
    return arr.map(fn).includes(false) ? false : true

}

console.log(validateNum([2, 4, 6, 8, 10],(num) => num % 2 === 0));

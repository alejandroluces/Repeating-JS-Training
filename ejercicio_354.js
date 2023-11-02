/*
Ejercicio 354
Ejercicio 4: Eliminar elementos de un Array original usando slice()

Entrada: [5, 10, 15, 20, 25], slice(1, 3)
Salida: [5, 20, 25]
*/

let array = [5, 10, 15, 20, 25];
let array2 = array.slice().filter((item)=>item !== 10 && item !== 5);
console.log(array2);


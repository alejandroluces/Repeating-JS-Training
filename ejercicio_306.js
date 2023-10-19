/*
Ejercicio 306
Unión de objetos en un array:

Planteamiento: Convierte un array de objetos en una sola cadena JSON utilizando JSON.stringify() y join().
Ejemplo de entrada: [{a: 1}, {b: 2}, {c: 3}]
Ejemplo de salida: "[{"a":1},{"b":2},{"c":3}]"
 */
const converInStr = (arr) =>{

    // return JSON.stringify(arr);
    // todo el array se convierte en un string. El codigo seria:
    return JSON.stringify(arr).split(" ").join("");




    
    
}

console.log(converInStr([{a: 1}, {b: 2}, {c: 3}]));



/*
Ejercicio 303
Combinación de objetos:

Planteamiento: Combina dos objetos en uno utilizando Object.assign() y join().
Ejemplo de entrada: {a: 1, b: 2} y {b: 3, c: 4}
Ejemplo de salida: {a: 1, b: "2 3", c: 4}
*/

const combine = (obj1, obj2) =>{
        
        return Object.assign({},obj1, obj2);
        
    }

console.log(combine({a: 1, b: 2}, {b: 3, c: 4}));

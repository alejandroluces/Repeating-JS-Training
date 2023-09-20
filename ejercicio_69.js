/*
Ejercicio 69: Sumar valores de un objeto

Planteamiento: Escribe una función que tome un objeto con valores numéricos y devuelva la suma de esos valores.
Ejemplo de entrada: {a: 5, b: 10, c: 3}
Ejemplo de salida: 18
*/

const sumObj=(obj)=>{

    return Object.values(obj).reduce((a,b)=>a+b)

}

console.log(sumObj({a: 5, b: 10, c: 3}));

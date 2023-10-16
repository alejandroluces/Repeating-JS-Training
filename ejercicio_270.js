/*
Ejercicio 270
Crear un Conjunto de Valores Distintos en un Objeto:

Entrada: Un objeto con propiedades y valores.
Salida: Un ejemplo sería:
Entrada: { a: 1, b: 2, c: 1, d: 3 }
Salida: Set {1, 2, 3}
*/
const dataObj = (obj) =>{

    let newSet = Object.values(obj)
    return new Set(newSet)
}

console.log(dataObj({ a: 1, b: 2, c: 1, d: 3 }));


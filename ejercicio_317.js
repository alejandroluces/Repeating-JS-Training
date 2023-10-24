/*
Ejercicio 317
Comprobar si hay nombres repetidos en un Array de objetos

Entrada: [{nombre: 'Juan'}, {nombre: 'Ana'}, {nombre: 'Juan'}]
Salida: true
*/

const arrNames = [{nombre: 'Juan'}, {nombre: 'Ana'}, {nombre: 'Ana'}]

const searchNamesRepear = (arr) =>{

    // return arr.some((item, index) => arr.findIndex((item2) => item.nombre === item2.nombre) !== index);
    return arr.some((item,index)=> arr.findIndex((item2)=>item2.nombre===item.nombre) !== index )
}

console.log(searchNamesRepear(arrNames));



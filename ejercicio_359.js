/*

Ejercicio 359
Ejercicio 9: Obtener una copia del objeto original

Entrada: {fruta: 'manzana', color: 'rojo'}, slice()
Salida: {fruta: 'manzana', color: 'rojo'}
 */

const obj = {fruta: 'manzana', color: 'rojo'}

const copyObj = (obj) =>{
    return {...obj}
}


console.log(copyObj(obj));



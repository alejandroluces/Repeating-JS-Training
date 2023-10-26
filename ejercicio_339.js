/*
Ejercicio 339
 Validar si todos los objetos en un Array de objetos tienen una propiedad 'calificacion' mayor o igual a 80

Entrada: [{nombre: 'Sara', calificacion: 85}, {nombre: 'David', calificacion: 92}]
Salida: true
*/

const ObjNameCalif = [{nombre: 'Sara', calificacion: 85}, {nombre: 'David', calificacion: 92}]

const findNote = (arrObj,note) =>{

    return arrObj.every((item) => item.calificacion>note)
}

console.log(findNote(ObjNameCalif,80));



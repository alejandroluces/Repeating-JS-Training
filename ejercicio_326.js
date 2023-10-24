/*
Ejercicio 326
Comprobar si algún objeto en un Array de objetos tiene 
una propiedad 'calificacion' mayor o igual a 90

Entrada: [{nombre: 'Carlos', calificacion: 85}, {nombre: 'Elena', calificacion: 92}]
Salida: true
 */
const calificacion= [{nombre: 'Carlos', calificacion: 85}, {nombre: 'Elena', calificacion: 90}]
const validateCalification = (arrNameCalif,value) =>{

    return arrNameCalif.map((item) => item.calificacion).some((item) => item>=value)
}

console.log(validateCalification(calificacion,90));

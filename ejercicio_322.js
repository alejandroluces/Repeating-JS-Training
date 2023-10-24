/*
Ejercicio 322
Validar si algún objeto en un Array de objetos tiene 
una propiedad específica con un valor determinado

Entrada: [{nombre: 'Sara', edad: 30}, {nombre: 'David', edad: 25}]
Salida: true
*/
const validateArrObj = (arrObj) =>{

    return arrObj.some((obj)=> obj.nombre === 'Sara');

}

console.log(validateArrObj([{nombre: 'Sara', edad: 30}, {nombre: 'David', edad: 25}]));

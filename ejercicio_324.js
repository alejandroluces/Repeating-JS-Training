/*
Ejercicio 324
Comprobar si algún objeto en un Array de objetos tiene una 
propiedad 'activo' con valor true

Entrada: [{nombre: 'Luis', activo: false}, {nombre: 'Ana', activo: true}]
Salida: true
*/

const arrObj = [{nombre: 'Luis', activo: false}, {nombre: 'Ana', activo: true}]

const validatePropiert = (arrObj) =>{

    return arrObj.some((obj)=> obj.activo === true);

}

console.log(validatePropiert(arrObj));



// Ejercicio 334
//  Validar si todos los objetos en un Array
//  tienen una propiedad 'ciudad' definida

// Entrada: [{nombre: 'Luis', ciudad: 'Madrid'}, {nombre: 'Ana',ciudad: 'Madrid'}, {nombre: 'Pedro', ciudad: 'Barcelona'}]
// Salida: false

const validatePropier = (arr) =>{

    return arr.every((item) => item.hasOwnProperty('ciudad'))
}

console.log(validatePropier([{nombre: 'Luis', ciudad: 'Madrid'}, {nombre: 'Ana'}, {nombre: 'Pedro', ciudad: 'Barcelona'}]));

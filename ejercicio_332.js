/*
Ejercicio 332
 Comprobar si todos los nombres en un Array de objetos tienen más de 3 caracteres

Entrada: [{nombre: 'Juan'}, {nombre: 'Ana'}, {nombre: 'Pedro'}]
Salida: false
*/

const validateQtyChart = (arrNames,chart) =>{

    return arrNames.every((item) => item.nombre.length > chart)
}

console.log(validateQtyChart([{nombre: 'Juan'}, {nombre: 'Ana'}, {nombre: 'Pedro'}],3));



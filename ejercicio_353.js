

/*
Ejercicio 353
Ejercicio 3: Obtener un subconjunto de propiedades de un objeto

Entrada: {nombre: 'Juan', edad: 25, ciudad: 'Madrid'}, slice(['nombre', 'ciudad'])
Salida: {nombre: 'Juan', ciudad: 'Madrid'}
*/

const slice = (obj, keys) => {

    // return  keys.reduce((acc, key) => {
    //     acc[key] = obj[key];
    //     return acc;
    // }, {});
    // como seria el codigo unsando slice.
    return keys.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
    }, {});


}
console.log(slice({nombre: 'Juan', edad: 25, ciudad: 'Madrid'}, ['nombre', 'ciudad']));

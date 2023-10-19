/*
Ejercicio 307
Filtrado de propiedades de un objeto:

Planteamiento: Filtra las propiedades de un objeto que contienen valores numéricos y únelas en una cadena.
Ejemplo de entrada: {nombre: "Juan", edad: 30, peso: 70}
Ejemplo de salida: "30 70"
*/

const filterObj = (obj) =>{

    return [obj.edad, obj.peso].join(" ")

}

console.log(filterObj({nombre: "Juan", edad: 30, peso: 70}));


// Ejercicio 313
// Unión de cadenas de un objeto:

// Planteamiento: Toma un objeto con propiedades de cadena y únelas en una sola cadena.
// Ejemplo de entrada: {nombre: "María", apellido: "González"}
// Ejemplo de salida: "María González"

const merchFulName = (obj) =>{

    return `${obj.nombre} ${obj.apellido}`
}

console.log(merchFulName({nombre: "María", apellido: "González"}));


// Ejercicio 42: Duplicar los elementos de un array de cadenas

// Planteamiento: Escribe una función que tome un array de cadenas como entrada y utilice el método map para duplicar cada cadena en el array.
// Ejemplo de entrada: ['Hola', 'Mundo', 'JavaScript']
// Ejemplo de salida: ['HolaHola', 'MundoMundo', 'JavaScriptJavaScript']

const duplicateStr=(str)=>{

    return str.map((item)=>item+item)

}

console.log(duplicateStr(['Hola', 'Mundo', 'JavaScript']));

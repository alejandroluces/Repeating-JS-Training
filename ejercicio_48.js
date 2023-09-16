// Ejercicio 48: Concatenar un sufijo a cada elemento de un array de palabras

// Planteamiento: Escribe una función que tome un array de palabras y un sufijo como entrada y utilice el método map para agregar el sufijo a cada palabra.
// Ejemplo de entrada: ['manzana', 'pera', 'uva'], Sufijo: 's'
// Ejemplo de salida: ['manzanas', 'peras', 'uvas']

const concatSuf=(arr,suf)=>{

    return arr.map((item)=>item+suf)

}

console.log(concatSuf(['manzana', 'pera', 'uva'],"s"));

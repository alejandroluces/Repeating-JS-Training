// Ejercicio 66: Encontrar elementos comunes en dos arrays

// Planteamiento: Crea una función que tome dos arrays y devuelva un nuevo array con los elementos comunes entre ambos.
// Ejemplo de entrada: [1, 2, 3, 4] y [3, 4, 5, 6]
// Ejemplo de salida: [3, 4]

const elementComun=(arrayOne,arrayTwo)=>{

    return arrayOne.filter((item)=>arrayTwo.includes(item))

}

console.log(elementComun([1, 2, 3, 4],[3, 4, 5, 6]));

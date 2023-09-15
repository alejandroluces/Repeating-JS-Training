
// Ejercicio: Duplicar cada elemento de un array

// Planteamiento: Escribe una función que tome un array de números como entrada y utilice el método map para duplicar cada elemento del array, es decir, multiplicar cada número por 2.
// Ejemplo de entrada: [1, 2, 3, 4, 5]
// Ejemplo de salida: [2, 4, 6, 8, 10]
// En este ejercicio, la función toma el array [1, 2, 3, 4, 5] como entrada y utiliza el método map para aplicar una función que multiplica cada número por 2. El resultado es [2, 4, 6, 8, 10], donde cada elemento del array original se ha duplicado.

const duplicateVal=(arr)=>{

    return arr.map((item)=>item*2)
}

console.log(duplicateVal([1, 2, 3, 4, 5]));

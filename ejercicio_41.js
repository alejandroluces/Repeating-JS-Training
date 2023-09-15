
// Planteamiento: Escribe una función que tome un array de números como entrada y utilice el método map para calcular el cuadrado de cada número en el array.
// Ejemplo de entrada: [1, 2, 3, 4, 5]
// Ejemplo de salida: [1, 4, 9, 16, 25]
// En este ejercicio, la función toma el array [1, 2, 3, 4, 5] como entrada y utiliza el método map para aplicar una función que calcula el cuadrado de cada número. El resultado es [1, 4, 9, 16, 25], donde cada elemento del array original se ha elevado al cuadrado.

const numExpTwo=(nun)=>{

    return nun.map((item)=>item**2)
}

console.log(numExpTwo([1, 2, 3, 4, 5]));

// Ejercicio 49: Redondear números en un array

// Planteamiento: Crea una función que tome un array de números decimales como entrada y utilice el método map para redondear cada número al número entero más cercano.
// Ejemplo de entrada: [2.3, 4.8, 3.5, 1.9]
// Ejemplo de salida: [2, 5, 4, 2]

// Math. ceil()

const redondNum=(num)=>{

    return num.map((item)=>Math.round(item))
}

console.log(redondNum([2.3, 4.8, 3.5, 1.9]));

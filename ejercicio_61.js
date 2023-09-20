// Ejercicio 61: Obtener el promedio de un array

// Planteamiento: Escribe una función que tome un array de números como entrada y devuelva el promedio de esos números.
// Ejemplo de entrada: [2, 4, 6, 8]
// Ejemplo de salida: 5

const averageNum=(arr)=>{

    return arr.reduce((acc,ac)=>acc+ac)/arr.length
}

console.log(averageNum([2, 4, 6, 8]));

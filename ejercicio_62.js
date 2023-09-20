// Ejercicio 62: Encontrar el número más grande en un array

// Planteamiento: Crea una función que encuentre el número más grande en un array de números.
// Ejemplo de entrada: [5, 12, 8, 24, 3]
// Ejemplo de salida: 24

const searchNumLong=(arrnum)=>{

    // return arrnum.sort((a,b)=>a-b).splice(-1)
    return Math.max(...arrnum)
}
console.log(searchNumLong([5, 12, 8, 24, 3]));

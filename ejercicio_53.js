// Ejercicio 53: Encontrar la longitud de palabras en un array de frases

// Planteamiento: Escribe una función que tome un array de frases y utilice el método map para encontrar la longitud de palabras en cada frase y devolver un nuevo array con esas longitudes.
// Ejemplo de entrada: ['Hola, cómo estás?', 'JavaScript es genial']
// Ejemplo de salida: [4, 4, 6, 7, 2, 6]

const countStr=(str)=>{

    return separador= str.join(" ").split(" ").map((item)=>item.length)
   
}

console.log(countStr(['Hola, cómo estás?', 'JavaScript es genial']));

// Ejercicio 46: Capitalizar la primera letra de cada palabra en una frase

// Planteamiento: Escribe una función que tome un array de frases y utilice el método map para capitalizar la primera letra de cada palabra en cada frase.
// Ejemplo de entrada: ['hola mundo', 'programación es divertida']
// Ejemplo de salida: ['Hola Mundo', 'Programación Es Divertida']

const firshLetter=(str)=>{
    

    return str.map((item)=>item.split(" ").map((item)=>item[0].toUpperCase()+item.slice(1)).join(" "))
}


console.log(firshLetter(['hola mundo', 'programación es divertida']));

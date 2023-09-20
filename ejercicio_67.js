// Ejercicio 67: Contar las vocales en una cadena de texto

// Planteamiento: Escribe una función que cuente la cantidad de cada vocal (a, e, i, o, u) en una cadena de texto y
//  devuelva un objeto con los resultados.
// Ejemplo de entrada: "Hola, cómo estás?"
// Ejemplo de salida: {a: 2, e: 1, i: 0, o: 2, u: 1}

const repeaLetter=(str)=>{
    const obj = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    }
    let vocales = str.replace(/[^aeiou]/g, "")
    return vocales.split("").map((item, index, arr)=> item)
}

console.log(repeaLetter("Hola, cómo estás?"));

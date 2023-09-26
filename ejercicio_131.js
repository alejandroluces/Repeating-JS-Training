// Ejercicio 131
// Concatenar todas las cadenas de texto en un array en una sola cadena sin espacios:
// - Entrada: ["Hola", "Mundo"]
// - Salida: "HolaMundo"

const concatStr = (arr) =>{
    
    return  arr.reduce ((a,b)=> a+b)

}

console.log(concatStr(["Hola", "Mundo"]));

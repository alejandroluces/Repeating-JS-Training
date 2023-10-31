/*
// Dada una cadena de palabras (x), debe devolver una matriz de palabras, ordenadas alfabéticamente por el carácter final de cada una.

// Si dos palabras tienen la misma última letra, la matriz devuelta debería mostrarlas en el orden en que aparecieron en la cadena dada.

// entrada: 'man i need a taxi up to ubud'
// salida: ['a','need','ubud', 'i','taxi','man','to','up']
*/



const orderAlpha = (str) =>{

    return str.split("").reverse().join("").split(" ").sort((a,b) => a > b ? 1:-1).map((item) => item.split("").reverse().join(""))
  
}

console.log(orderAlpha('man i need a taxi up to ubud'));

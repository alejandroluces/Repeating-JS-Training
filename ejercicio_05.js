// Cuando se le proporciona una letra, devuelve su posición en el alfabeto.
// Entrada :: "a" Salida :: "Posición del alfabeto: 1"


const numCodeAbcdario=(letter)=>{

    return letter.charCodeAt()-96

}

console.log(numCodeAbcdario("c"));



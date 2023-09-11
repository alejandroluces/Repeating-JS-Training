// 11) Ejercicio: Verificar si una cadena contiene las letras 'a' y 'b'
// Planteamiento: Escribe una función que tome como entrada una cadena 
// y determine si contiene las letras 'a' y 'b'.
// Entrada: Una cadena, por ejemplo: "casa blanca"
// Salida: true si la cadena contiene las letras 'a' y 'b', false en caso contrario.

const contendLetter=(str)=>{

    return str.split("").includes("a") && str.split("").includes("b")

}

console.log(contendLetter("casa blanca"));

/*
Ejercicio 263
Verificar si una Palabra se Repite en una Cadena de Texto:

Entrada: Una cadena de texto y una palabra a buscar.
Salida: Un ejemplo sería:
Entrada: "Este es un ejemplo de ejemplo.", "ejemplo"
Salida: true
*/

const validateRepeat = (str,rpt) =>{

    return str.split(" ").filter((item) => item.includes(rpt)).length>1

}

console.log(validateRepeat("Este es un ejemplo de ejemplo", "ejemplo"));



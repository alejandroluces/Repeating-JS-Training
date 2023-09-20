/*
Ejercicio 68: Revertir una cadena de texto

Planteamiento: Crea una función que tome una cadena de texto y la devuelva en orden inverso.
Ejemplo de entrada: "JavaScript"
Ejemplo de salida: "tpircSavaJ"
*/

const reverseStr=(str)=>{

    return str.split("").reverse().join("")
}

console.log(reverseStr("JavaScript"));

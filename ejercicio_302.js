
/*
Ejercicio 302
Inversión de una cadena:

Planteamiento: Invierte una cadena utilizando 
Ejemplo de entrada: "hola"
Ejemplo de salida: "aloh"
*/

const reverseString = (str) =>{

    return str.split("").reverse().join("")

}
console.log(reverseString("hola"));


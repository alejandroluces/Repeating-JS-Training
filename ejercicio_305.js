/*
Ejercicio 305
División de una cadena:

Planteamiento: Divide una cadena en palabras individuales y únelas con guiones bajos.
Ejemplo de entrada: "Hola Mundo"
Ejemplo de salida: "Hola_Mundo"
*/

const divideStr = (str) =>{

    return str.split(" ").join("_")

}

console.log(divideStr("Hola Mundo"));


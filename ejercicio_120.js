/**

Ejercicio 120
Unir todas las palabras en un array de cadenas de texto en una sola cadena con un espacio entre ellas:
- Entrada: ["Este", "es", "un", "ejemplo"]
- Salida: "Este es un ejemplo"

 */

const merchWords = (arrStr) =>{
return arrStr.reduce((a,b)=>`${a} ${b}`) 
}

console.log(merchWords(["Este", "es", "un", "ejemplo"]));

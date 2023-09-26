/*
Ejercicio 137
Concatenar todas las cadenas de texto en un array en una sola cadena, 
incluyendo el índice como prefijo:
- Entrada: ["Hola", " ", "Mundo"]
- Salida: "0: Hola 1: Mundo"
*/

const concatStrText = (strText) =>{
// return strText.reduce((acc, el, index) => acc + index + ": " + el + " ", "");

return strText.reduce ((a,b,index) => a + index +": "+b+" ","" )
}

console.log(concatStrText(["Hola", " ", "Mundo"]));

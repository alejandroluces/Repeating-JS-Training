/*
Ejercicio 134
Concatenar todas las cadenas de texto en un array en una sola cadena con guiones como separadores:
- Entrada: ["uno", "dos", "tres"]
- Salida: "uno-dos-tres"
*/

const concatStrText = (strTex) =>{

return  strTex.reduce ((a,b)=> `${a}-${b}`)
// return strTex.join("-")

}

console.log(concatStrText(["uno", "dos", "tres"]));

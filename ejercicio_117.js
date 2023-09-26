/*
Ejercicio 117
Concatenar todas las cadenas de texto en un array en una sola cadena:
- Entrada: ["Hola", " ", "Mundo"]
- Salida: "Hola Mundo"
*/

const concatArrStr = (arrStr) =>{

    return arrStr.reduce((a,b)=>a+b)

}

console.log(concatArrStr(["Hola", " ", "Mundo"]));

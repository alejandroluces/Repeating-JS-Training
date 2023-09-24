/*

Ejercicio 106
Concatenar elementos de dos arrays de cadenas de texto y agregar el índice:

Entrada: ["Hola", "Mundo"] y ["¡Hola!", "¡Adiós!"]
Salida: ["Hola¡Hola!0", "Mundo¡Adiós!1"]

*/

const addIndexStr = (arrI,arrIi) =>{

    return arrI.map((item,index) => item + arrIi + index)

}

console.log(addIndexStr(["Hola", "Mundo"] , ["¡Hola!", "¡Adiós!"]));

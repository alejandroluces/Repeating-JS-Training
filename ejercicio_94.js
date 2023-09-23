/*
Ejercicio 94
Concatenar dos arrays de cadenas con un separador personalizado:

Entrada: ["Hola", "Mundo"] y ["¡Hola!", "¡Adiós!"] con separador " - "
Salida: ["Hola - ¡Hola!", "Mundo - ¡Adiós!"]

*/

const concatArrHyphen = (arrOne,arrTwo) =>{

    return arrOne.map((item,index)=>`${item}-${arrTwo[index]}`)

}

console.log(concatArrHyphen(["Hola", "Mundo"] , ["¡Hola!", "¡Adiós!"]));

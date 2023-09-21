/*

Ejercicio 83
Concatenar dos arrays de cadenas de texto:
Entrada: ["Hola", "Mundo"] y ["¡Hola!", "¡Adiós!"]
Salida: ["Hola ¡Hola!", "Mundo ¡Adiós!"]

*/

const concatArr=(arrOne,arrTwo)=>{

    return arrOne.map((item,index)=>item+arrTwo[index])


}

console.log(concatArr(["Hola", "Mundo"] , ["¡Hola!", "¡Adiós!"]));

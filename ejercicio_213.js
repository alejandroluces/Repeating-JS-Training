/*
Ejercicio 213
Crear una Lista Numerada a partir de un Array:

Entrada: Un array de elementos.
Salida: Un ejemplo sería:
Entrada: ["Manzanas", "Plátanos", "Peras"]
Salida: "1. Manzanas\n2. Plátanos\n3. Peras"
*/

const createListNumbered = (arr) =>{

    return arr.map((item,index)=> `${index+1}. ${item}`).join("\n")

}

console.log(createListNumbered(["Manzanas", "Plátanos", "Peras"]));





/*
Ejercicio 122
Encontrar la longitud total de todas las cadenas de texto en un array:
- Entrada: ["Manzana", "Banana", "Cereza"]
- Salida: 18
*/

const searchLength = (arrWords) =>{

    return arrWords.reduce ((a,b) => a+b).length

}

console.log(searchLength(["Manzana", "Banana", "Cereza"]));

/*
Ejercicio 149
Encontrar la longitud total de todas las cadenas de texto en una matriz de arrays de cadenas:

Entrada: [["Manzana", "Banana"], ["Cereza", "Damasco"], ["Kiwi", "Fresa"]]
Salida: 35

*/

const countStr = (arrWords) =>{

    return arrWords.flat().map((item)=>item.length).reduce((a,b)=>a+b)

}

console.log(countStr([["Manzana", "Banana"], ["Cereza", "Damasco"], ["Kiwi", "Fresa"]]));

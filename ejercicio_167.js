/*
Ejercicio 167
Filtrar cadenas de texto que contienen una letra específica de una matriz de arrays de 
cadenas de texto y mostrar los resultados en una matriz nueva:

Entrada: [["manzana", "plátano", "pera"], ["sandía", "kiwi", "fresa"], ["uva", "cereza", "naranja"]] 
y letra para filtrar 'a'
Salida: [["manzana", "plátano"], ["sandía", "naranja"], ["cereza"]]
*/

const filterLetter = (arrWords,letter) =>{

    return filteWord = arrWords.map((item,index)=>item.filter((itemFil)=>itemFil.includes(letter)))
    
}

console.log(filterLetter([["manzana", "plátano", "pera"], ["sandia", "kiwi", "fresa"], ["uva", "cereza", "naranja"]],"i"));

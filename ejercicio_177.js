/*
Ejercicio 177
Filtrar cadenas de texto que comienzan con una letra específica 
de una matriz de arrays de cadenas de texto y mostrar los resultados 
en una matriz nueva:
Entrada: [["manzana", "plátano", "pera"], ["sandía", "kiwi", "fresa"], ["uva", "cereza", "naranja"]] y letra para filtrar 'p'
Salida: [["plátano", "pera"], [""]]
*/

const filterLetter = (fruit,letter) =>{

    return fruit.map((item) => item.filter((itemFil) => itemFil.includes("p")))

}

console.log(filterLetter([["manzana", "plátano", "pera"], ["sandía", "kiwi", "fresa"], ["uva", "cereza", "naranja"]],"p"));

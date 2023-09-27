/*
Ejercicio 160
Filtrar elementos en una matriz de cadenas de texto para obtener las que contienen una 
letra específica y mostrar los resultados en una matriz nueva:

Entrada: [["manzana", "plátano", "pera"], 
["sandía", "kiwi", "fresa"], 
["uva", "cereza", "naranja"]] y letra para filtrar 'a'


Salida: [["manzana", "plátano", "pera"], ["naranja"]]
*/

const fruits = [
    ["manzana", "plátano", "pera"], 
    ["sandía", "kiwi", "fresa"], 
    ["uva", "cereza", "naranja"]

]
const letterFilter= "e"

const filterLetter = (arrWords, letter) =>{

    return fruits.map((item)=>item.filter((item)=>item.includes(letterFilter)))

}

console.log(filterLetter(fruits,letterFilter));

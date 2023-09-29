/*
Ejercicio 172
Filtrar palabras que tengan una longitud específica de una 
matriz de cadenas de texto y mostrar los resultados
 en una matriz nueva:

Entrada: [["manzana", "plátano", "pera"], ["sandía", "kiwi", "fresa"], ["uva", "cereza", "naranja"]] (filtrar palabras de longitud 5)
Salida: [["manzana"], ["kiwi", "fresa"], ["cereza"]]
*/
const fruitList = [
    ["manzana", "plátano", "pera"], 
    ["sandía", "kiwi", "fresa"], 
    ["uva", "cereza", "naranja"]]
const valMin= 5

const arrFruitList = (arrFruit,valMin) =>{

    return arrFruit.map((item) => item.filter((itemFilt) => itemFilt.length>=5))

}

console.log(arrFruitList(fruitList));



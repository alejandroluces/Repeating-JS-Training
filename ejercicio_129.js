/*
Ejercicio 129
Filtrar elementos en un array de cadenas de texto que contienen una letra específica:
- Entrada: ["manzana", "pera", "plátano", "naranja"] y letra para filtrar 'a'
- Salida: ["manzana", "naranja"]
*/

const filterArrWords = (arrWord) =>{

    return  arrWord.filter ((item) => item.includes("o") )

}

console.log(filterArrWords(["manzana", "pera", "plátano", "naranja"],"a"));

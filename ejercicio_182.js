/**
 Ejercicio 182
Encontrar la primera cadena de texto que contiene una letra específica en una matriz 
de arrays de cadenas de texto y mostrarla junto con su índice en el array principal:

Entrada: [["manzana", "pera"], ["sandía", "fresa"], ["uva", "naranja"]] y letra a buscar 'a'
Salida: {cadena: "manzana", indiceArrayExterno: 0, indiceArrayInterno: 0}
 */

const buscarLetra = (array, letra) => {

    return array.map((item,index) => {return{
        cadena: item.find((item)=>item.includes(letra)), indiceArrayExterno: index, indiceArrayInterno: item.findIndex((item)=>item.includes(letra))}}).find((item)=>item.cadena!== undefined)
}

console.log(buscarLetra([["manzana", "pera"], ["sandía", "fresa"], ["uva", "naranja"]],"a"));

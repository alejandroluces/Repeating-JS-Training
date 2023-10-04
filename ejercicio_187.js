/*
Ejercicio 187
Encontrar la primera palabra que tenga una longitud específica en una matriz
 de cadenas de texto y mostrarla junto con su índice en el array principal:

Entrada: [["manzana", "plátano"], ["sandía", "fresa"], ["uva", "naranja"]] y longitud requerida 7
Salida: {palabra: "manzana", indiceArrayExterno: 0, indiceArrayInterno: 0}
*/



const searchWords = (fruit, longitud) =>{

   return fruit.map((item,index) =>{return{
    palabra: item.find((item) => item.length === longitud),
    indiceArrayExterno: index,
    indiceArrayInterno: item.findIndex((item)=>item.length=== longitud)
   }}).find((item) => item.palabra !==undefined)

}

console.log(searchWords([["manzana", "plátano"], ["sandía", "fresa"], ["uva", "naranja"]], 5));

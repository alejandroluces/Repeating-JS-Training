/*

Ejercicio 165
Encontrar la cadena más corta en una matriz de cadenas de texto y mostrar su longitud junto con la cadena:

Entrada: [["manzana", "plátano", "pera"], ["sandía", "kiwi", "fresa"], ["uva", "cereza", "naranja"]]
Salida: {cadena: "uva", longitud: 3}

*/

const strWordsShort = (strWords) =>{

   let dv= strWords.flat().reduce((a,b)=> a.length < b.length ? a : b )

}

console.log(strWordsShort([["manzana", "plátano", "pera"], ["sandía", "kiwii", "fresa"], ["uvaaaa", "cereza", "naranja"]]));



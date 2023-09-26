/*
Ejercicio 144
Encontrar la cadena más larga en un array de cadenas de texto y mostrar su índice:
- Entrada: ["manzana", "plátano", "sandíaverde", "kiwi"]
- Salida: {cadenaMasLarga: "sandía", indice: 2}
*/

const searchStrMoreLong = (words) =>{
    let wordsLong = words.reduce ((a,b,index) => a.length>b.length ? a : b)
    let indexWord = words.indexOf(wordsLong)
    return{cadenaMasLarga:wordsLong , indice: indexWord}
}


console.log(searchStrMoreLong(["manzana", "plátano", "sandíaverde", "kiwi"]));

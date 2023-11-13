/*
filtrarPalabras de longitud uniforme
9794% de 602980 de 1.5630xjgv1 problema reportado
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
Escriba una función llamada "filterEvenLengthWords".

Dada una matriz de cadenas, "filterEvenLengthWords" devuelve una matriz que contiene solo los elementos de la matriz dada cuya longitud es un número par.

var salida = filterEvenLengthWords(['palabra', 'palabras', 'palabra', 'palabras']);

console.log(salida); // --> ['palabra', 'palabra']

FUNDAMENTOS
*/

const filterEvenLengthWords = (arrWods) =>{
    // let result = []
    // for(let i = 0 ; i<arrWods.length ; i++){
    //     if(arrWods[i].length %2=== 0){
    //         result.push(arrWods[i])
    //     }
    // }
    // return result

    return arrWods.filter((item) =>item.length %2 ===0)

}

console.log(filterEvenLengthWords(['palabra', 'palabras', 'palabra', 'palabras']));

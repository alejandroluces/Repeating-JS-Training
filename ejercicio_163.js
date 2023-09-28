/*
Ejercicio 163
Concatenar todos los subarrays de cadenas de texto en una sola cadena de texto,
 separando cada subarray con una coma:

Entrada: [["Manzana", "Banana"], ["Cereza", "Damasco"], ["Kiwi", "Fresa"]]
Salida: "Manzana,Banana,Cereza,Damasco,Kiwi,Fresa"
*/

const concatArrWords = (arrWords) =>{
    return  arrWords.flat().join(",")
    }
    
    console.log(concatArrWords([["Manzana", "Banana"], ["Cereza", "Damasco"], ["Kiwi", "Fresa"]]));
    
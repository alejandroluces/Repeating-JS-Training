    /*
    Ejercicio 140
Unir todas las palabras en un array de cadenas de texto en una
 sola cadena, incluyendo el índice como separador:
- Entrada: ["Este", "es", "un", "ejemplo"]
- Salida: "0-Este1-es2-un3-ejemplo"
    
    */

const concatWords = (arrWords) =>{
return  arrWords.reduce((acc,el,index)=>acc + index +"-" + el,""
    
)
}

console.log(concatWords(["Este", "es", "un", "ejemplo"]));

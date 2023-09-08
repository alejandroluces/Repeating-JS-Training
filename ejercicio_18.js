// 8) Planteamiento: Verificar si una letra ingresada es una vocal o una consonante.
// Entrada: Un caracter (letra).
// Salida: "Es una vocal" si la letra es "a", "e", "i", "o" o "u", o "Es una consonante" si no lo es.

const validateConsonantLetter=(letter)=>{
    if(letter==="a"||letter==="A"||letter==="e"||letter==="E"||letter==="i"||letter==="I"||letter==="o"||letter==="O"||letter==="u"||letter==="U"){
        return `Es una vocal`
    }else{
        return `Es una consonante`
    }


}

console.log(validateConsonantLetter("a"));

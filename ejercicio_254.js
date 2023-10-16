/*
Entrada: Una cadena de texto y una palabra a buscar.
Salida: Un ejemplo sería:
Entrada: "El rápido zorro marrón saltó", "zorro"
Salida: true
*/

const searchWords = (str,word) =>{

    return str.includes(word)
}
console.log(searchWords("El rápido zorro marrón saltó", "zorro"));

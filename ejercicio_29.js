// 29) Ejercicio: Verificar si una cadena empieza con una vocal o termina con una consonante
// Planteamiento: Escribe una función que tome como entrada una cadena y determine si empieza
//  con una vocal o termina con una consonante.
// Entrada: Una cadena, por ejemplo: "elefante"
// Salida: true si la cadena empieza con una vocal o termina con una consonante, false en caso contrario.

const indexVocal=(str)=>{

  let firsLetter=str[0].toLowerCase()
  let letterEnd=str.slice(-1).toLowerCase()
    let vocal=["a","e","i","o","u"]
    let consonante=["b","c","d","f","g","h","j","k","l","m","n","ñ","p","q","r","s","t","v","w","y","z"]
    if(vocal.includes(firsLetter) || consonante.includes(letterEnd)){
        return true
    }else{return false}

}
console.log(indexVocal("Lefante"));




    // if(str[0]==="a" || str[0]==="A" || str.slice(-1)!=="a" || str.slice(-1)!=="A" ){
    //     return true
    // }
    // if(str[0]==="e" || str[0]==="E" || str.slice(-1)!=="e" || str.slice(-1)!=="E" ){
    //     return true
    // }
    // if(str[0]==="i" || str[0]==="I" || str.slice(-1)!=="i" || str.slice(-1)!=="I" ){
    //     return true
    // }
    // if(str[0]==="o" || str[0]==="O" || str.slice(-1)!=="o" || str.slice(-1)!=="O" ){
    //     return true
    // }
    // if(str[0]==="u" || str[0]==="U" || str.slice(-1)!=="u" || str.slice(-1)!=="U" ){
    //     return true
    // }else{return false}
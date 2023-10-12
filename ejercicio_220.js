/*
Ejercicio 220
Convertir un Conjunto (Set) de Números en una Cadena de Texto:

Entrada: Un conjunto (Set) de números.
Salida: Un ejemplo sería:
Entrada: new Set([1, 2, 3, 4, 5])
Salida: "1,2,3,4,5"
*/


const setNumbers= new Set([1, 2, 3, 4, 5])

const convertSetNum = (arrNum) =>{

    // return [...arrNum].toString()
    return [...arrNum].join(",")

}

console.log(convertSetNum(setNumbers));




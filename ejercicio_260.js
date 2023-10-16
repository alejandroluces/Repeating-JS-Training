/*
Ejercicio 260
Verificar si Alguna Palabra en una Lista Empieza con una Letra:

Entrada: Un array de palabras y una letra.
Salida: Un ejemplo sería:
Entrada: ["manzana", "banana", "pera", "uva"], "p"
Salida: true
*/


const arrFruits = ["panzana", "banana", "lera", "uva"]
const contentletter = "p"

const inicLetter = (arr,letter) => {

    return arr.map((item) => item[0].includes(letter)).includes(true)  

}

console.log(inicLetter(arrFruits,contentletter));

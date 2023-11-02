/*
Ejercicio 357
Ejercicio 7: Extraer elementos de un Array en un patrón específico

Entrada: [5, 10, 15, 20, 25, 30], slice(0, 6, 2)
Salida: [5, 15, 25]
*/

const arrNum = [5, 10, 15, 20, 25, 30]

const extraeElement = (arr) =>{

    return arr.slice().filter((item)=> item%2 !==0)
}

console.log(extraeElement(arrNum));



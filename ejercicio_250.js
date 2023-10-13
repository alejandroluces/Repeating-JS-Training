/*
Ejercicio 250
Agregar Elementos al Principio de un Array de Números y Crear un 
Nuevo Array con la Suma Acumulada de Elementos:

Entrada: Un array de números.
Salida: Un ejemplo sería:
Entrada: [1, 2, 3, 4, 5] (Agregar 0 al principio y calcular suma acumulada)
Salida: [0, 1, 3, 6, 10, 15]
*/

const arrNumbers= [1, 2, 3, 4, 5]
const addNumber= 0

const addNewNumber = (arr,number) =>{
    let newArray = [number,...arr]
    newArray
    let sum=0

    return newArray.map((item) =>
        sum+=item
         
    )
}

console.log(addNewNumber(arrNumbers,addNumber));



const numerosConse = [1,2,3,4,5,6,7,8,9]

const sumaAcumulada= (arr) =>{
    let sum=0
    return arr.map((item) =>
        sum +=  item
    )
}
console.log(sumaAcumulada(numerosConse));


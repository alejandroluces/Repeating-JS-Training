/*
Ejercicio 96
Crear un nuevo array de objetos con la multiplicación de propiedades de dos arrays de objetos:

Entrada: [{cantidad: 2, precio: 5}, {cantidad: 3, precio: 10}] y 
        [{cantidad: 1, precio: 3}, {cantidad: 2, precio: 7}]
Salida: [{total: 10}, {total: 30}]
*/

const arrOne = [
        {cantidad: 2, precio: 5}, 
        {cantidad: 3, precio: 10}
]

const arrTwo = [
    {cantidad: 1, precio: 3}, 
    {cantidad: 2, precio: 7}

]

const calculateMultiplication = (arr,arrSecond)=>{

    return arrOne.map((item)=>{
        return{ Total: item.cantidad*item.precio

    }})
    

}

console.log(calculateMultiplication(arrOne,arrTwo));

/*
Ejercicio 244
Agregar Elementos al Principio de un Array de Números y Crear un Nuevo Array 
con el Promedio de Cada Par de Números Consecutivos:

Entrada: Un array de números.
Salida: Un ejemplo sería:
Entrada: [1, 2, 3, 4, 5] (Agregar 0 al principio y calcular 
    promedio de [0, 1], [1, 2], [2, 3], [3, 4], [4, 5])
Salida: [0.5, 1.5, 2.5, 3.5, 4.5, 5]
*/

const numbers = [1, 2, 3, 4, 5]
const addNum = 0
const averageValculate = (arrNumers,num) =>{

    return [num,...arrNumers].map((item,index,arr)=> (item+arr[index+1])/2).slice(0,-1)
   
}

console.log(averageValculate(numbers,addNum));



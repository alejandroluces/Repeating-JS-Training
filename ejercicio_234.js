/*
Ejercicio 234
Eliminar el Primer Elemento de un Array de Números y Crear un Nuevo 
Array con el Promedio de Cada Par de Números Consecutivos:

Entrada: Un array de números.
Salida: Un ejemplo sería:
Entrada: [1, 2, 3, 4, 5] (Calcular promedio de [1, 2], [2, 3], [3, 4], [4, 5])
Salida: [1.5, 2.5, 3.5, 4.5]
*/

const average = (arr) => {

    return arr.map((item,index) => (item+arr[index+1])/2).slice(0,-1)
    //Otra Forma
    // return arr.map((item,index) => (item+arr[index+1])/2).filter((item,index) => index<arr.length-1)
    //Otra Forma

    

}

console.log(average([1, 2, 3, 4, 5]));






/*
Ejercicio 241
Agregar Elementos al Principio de un Array y Crear un Nuevo Array de Elementos Filtrados:

Entrada: Un array de números.
Salida: Un ejemplo sería:
Entrada: [5, 10, 15, 20, 25] (Agregar 30 al principio y filtrar elementos mayores que 15)
Salida: [30, 20, 25]

*/

const addElementAndFilter = (arrNum, num) =>{

    return [num, ...arrNum].filter((item) => item>num )


    // arrNum.unshift(num)
    // return arrNum.filter((item) => item>15)

}

console.log(addElementAndFilter([5, 10, 15, 20, 25,30], 15));



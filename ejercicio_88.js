/*
Ejercicio 88
Unir dos arrays de números en uno nuevo y eliminar duplicados:
Entrada: [1, 2, 3] y [3, 4, 5]
Salida: [1, 2, 3, 4, 5]

*/

const deleteDuplicate=(arrOne,arrTwo)=>{

    const merchArr = arrOne.concat(arrTwo)
    return [...new Set(merchArr)]
}

console.log(deleteDuplicate([1, 2, 3] , [3, 4, 5]));




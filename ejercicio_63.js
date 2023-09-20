// Ejercicio 63: Eliminar duplicados de un array

// Planteamiento: Escribe una función que tome un array y elimine los elementos duplicados, 
// devolviendo un nuevo array sin duplicados.
// Ejemplo de entrada: [1, 2, 2, 3, 4, 4, 5]
// Ejemplo de salida: [1, 2, 3, 4, 5]

const numSinDuplicate=(arr)=>{

    return arr.filter((num,index)=>arr.indexOf(num)===index)
    // return extraeNum.indexOf(num===index)

}


console.log(numSinDuplicate([1, 2, 2, 3, 4, 4, 5]));

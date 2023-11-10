/*
Ejercicio 365: Duplicar cada elemento en un Array

Entrada: [2, 4, 6, 8]
Salida: [4, 8, 12, 16]
*/

// 1. Crear una funcion que reciba un arreglo de numeros como parametro
const duplicateArrElement = (arr) =>{
// 2. Crear un array vacio que contendra el resultado de la funcion
    let result=[]
    // 3. se usa un bucle for que recorra el array y multiplique cada elemento por 2
    for(let i = 0 ; i<arr.length ; i++){
        result.push(arr[i]*2)
    }
    // 4. Al final del loop retornar el array resultante 
    return result

}

console.log(duplicateArrElement([2, 4, 6, 8]));








/*
Ejercicio 366: Concatenar dos Arrays en uno solo

Entrada: [1, 2, 3], [4, 5, 6]
Salida: [1, 2, 3, 4, 5, 6]
 */

const merchArrs = (arr1,arr2) =>{
    let result=[]
    for (let i = 0 ; i< arr1.length ; i++) {
        result.push(arr1[i])
    }
    for(let j = 0 ; j< arr2.length; j++) {
        result.push(arr2[j])
    }
    return result
    
}

console.log(merchArrs([1, 2, 3], [4, 5, 6]));










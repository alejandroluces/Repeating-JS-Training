/*
Ejercicio 364: Crear un nuevo Array con los elementos mayores que un valor dado

Entrada: [5, 15, 8, 30, 25], valor umbral: 10
Salida: [15, 30, 25]
*/

const arrNumbers = [5, 15, 8, 30, 25]
const numMin= 10
// 1. Crea una funcion que recibe dos paramentros
const filterNum = (arr,min) =>{
// 2. crear una variable que va guardar el resultado de la funcion
    let result =[]
// 3. crear un ciclo para recorrer el arreglo
    for(let i = 0 ; i < arr.length ;  i++){
// 4. se crea una condicional que va comparar si el elemento del arreglo es mayor al numero minimo
        if (arr[i] > min){
        // 5. si el condicional se cumple se agrega el elemento del arreglo al resultado
            result.push(arr[i])
        }
    }
    // 6. retornar el resultado
    return result
    
}

console.log(filterNum(arrNumbers,numMin));
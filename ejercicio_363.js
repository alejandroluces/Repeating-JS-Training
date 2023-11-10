
/*
Ejercicio 363: Contar la cantidad de elementos en un Array que cumplen 
cierta condición (por ejemplo, números pares)

Entrada: [2, 7, 10, 15, 22]
Salida: 3
*/

// 1. creamos una funcion que recibe un arreglo
const countNumPar = (arr) => {
    // 2. creamos una variable result que es la que vamos a retornar
    let result=0
    // 3. creamos un for que recorre el arreglo
    for(let i = 0 ; i<arr.length ; i++){
    // 5. si el numero es par sumamos en 1 a la variable result
        if(arr[i]%2==0){
            result++
        }
        
    }
    // 6. retornamos result 
    return result
        

}

console.log(countNumPar([2, 7, 10, 15, 22]));
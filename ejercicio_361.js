/*
Ejercicio 361: Calcular la suma de elementos en un Array

Entrada: [1, 2, 3, 4, 5]
Salida: 15

*/
const sumaArr = (arr) =>{
    // Crea una variable para almacenar la suma de los números de la matriz.
    let result =0
    //  Cree un bucle for para recorrer el array.
    for (let i =0; i < arr.length ; i++){
    // toma del bucle, y suma los números a la variable.
        result+=arr[i]
    }
    // Devuelve la variable
    return result
    
}
console.log(sumaArr([1, 2, 3, 4, 5]));


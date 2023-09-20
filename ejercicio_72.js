/*

Ejercicio 73: Encontrar el número de Fibonacci en una posición dada

Planteamiento: Escribe una función que devuelva el número de Fibonacci en una posición específica de la secuencia.
Ejemplo de entrada: 6 (para la sexta posición)
Ejemplo de salida: 8

*/

const fibonacci=(num)=>{
    let result=0
    let a=0
    let b=1
    for(let i=0;i<num;i++){
        result=a+b
        a=b
        b=result
    }
    return result
}
console.log(fibonacci(13));

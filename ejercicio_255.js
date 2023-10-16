/*
Ejercicio 255
Encontrar un Número en un Rango:

Entrada: Un número, un valor mínimo y un valor máximo.
Salida: Un ejemplo sería:
Entrada: 42, 10, 50
Salida: true
*/


const searchValMax = (numbers,numbers2,numbers3) =>{
    // let result=[]
    // for (let i = numbers2; i <= numbers3; i++) {
    //     result.push(i)  
    // }
    // return result.includes(numbers)

    return numbers2 <= numbers && numbers3 >= numbers
}

console.log(searchValMax(50, 10, 50));

/*
Ejercicio 193
Agregar varios elementos al final de un array de números y devolver el nuevo array:

Entrada: [1, 2, 3] y elementos a agregar [4, 5]
Salida: [1, 2, 3, 4, 5]
*/

const addNumbers = (numbers,twooNum) =>{

    
    // numbers.push(twooNum)
    // return numbers.flat()
    
    numbers.push(...twooNum)
    return numbers
}

console.log(addNumbers([1, 2, 3],[4, 5]));

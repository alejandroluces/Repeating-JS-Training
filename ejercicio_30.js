// 30) Ejercicio: Verificar si un número es par o divisible por 3
// Planteamiento: Escribe una función que tome como entrada un número y determine
//  si es par o divisible por 3.
// Entrada: Un número, por ejemplo: 9
// Salida: true si el número es par o divisible por 3, false en caso contrario.

const numParOrDivTree=(num)=>{

    return num%2===0 || num%3===0
}

console.log(numParOrDivTree(9));

// 10)Ejercicio: Verificar si un número es par y positivo
// Planteamiento: Escribe una función que tome como entrada un número y determine si es par y positivo.
// Entrada: Un número, por ejemplo: 6
// Salida: true si el número es par y positivo, false en caso contrario.

const validateNubParPositive = (num) =>{

    return num %2===0 && num > 0

}
console.log(validateNubParPositive(4));

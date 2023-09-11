// 37) Ejercicio: Verificar si un número es múltiplo de 4 y menor que 100
// Planteamiento: Escribe una función que tome como entrada un número y determine si es 
// múltiplo de 4 y menor que 100.
// Entrada: Un número, por ejemplo: 96
// Salida: true si el número es múltiplo de 4 y menor que 100, false en caso contrario.

const validateNum=(num)=>{

    return num<100 && num%4===0
}

console.log(validateNum(70));

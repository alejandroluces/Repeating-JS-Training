// 5)Planteamiento: Determinar si un número es divisible por otro.
// Entrada: Dos números enteros.
// Salida: "Es divisible" si el primer número es divisible por el segundo, 
// o "No es divisible" si no lo es.

const divisibleNumber=(num,div)=>{

    return num%div===0?`Es divisible`: `No es divisible`

}

console.log(divisibleNumber(10,5));

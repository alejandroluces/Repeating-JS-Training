// 9) Planteamiento: Determinar si un número es un múltiplo de 5 y de 3 al mismo tiempo.
// Entrada: Un número entero.
// Salida: "Es múltiplo de 5 y 3" si el número es divisible tanto por 5 como por 3, 
// o "No es múltiplo de 5 y 3" si no lo es.

const validMultiplo=(num)=>{

    return num%3===0 && num%5===0 ? `Es múltiplo de 5 y 3`:`No es múltiplo de 5 y 3`

//    if (num%3===0 && num%5===0) {
//         return `Es múltiplo de 5 y 3`
//    }else{
//     return `No es múltiplo de 5 y 3`
//    }


}

console.log(validMultiplo(30));

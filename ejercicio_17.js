// 7)Planteamiento: Determinar si un número es mayor que otro.
// Entrada: Dos números enteros.
// Salida: "El primer número es mayor" si el primer número es mayor que el segundo,
//  o "El segundo número es mayor" si es menor. Y por ultimo si son iguales "Los números son iguales".



const validateNumberGreater=(numOne,numTwo)=>{

    return numOne>numTwo?`El primer numero es mayo`: numOne<numTwo? `El segundo numero es mayor`: `Ambos numeros son iguales`

}

console.log(validateNumberGreater(5,5));

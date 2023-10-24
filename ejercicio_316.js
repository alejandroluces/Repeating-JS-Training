// Ejercicio 316:
//  Verificar si un Array contiene números pares

// Entrada: [1, 3, 5, 7, 8]
// Salida: true

const arrNumbers = [1,3,5,10,7]
const validateNmbers = (arr) =>{
    return arr.some((item)=>item%2===0)
}

console.log(validateNmbers(arrNumbers));

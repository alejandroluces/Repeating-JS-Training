/*
Ejercicio 333
 Verificar si todos los elementos de un Array son mayores de 18 años

Entrada: [25, 30, 19, 22, 20]
Salida: true
*/

const validateAge = (arrAge,age) =>{

    return arrAge.every((item) => item>age)
}

console.log(validateAge([25, 30, 19, 22, 20],18));

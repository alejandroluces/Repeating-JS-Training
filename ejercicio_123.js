/*
Ejercicio 123
Calcular la multiplicación acumulada de los elementos en un array numérico:
- Entrada: [2, 3, 4, 2]
- Salida: 48
*/

const calculateMulti = (num) =>{

    return num.reduce ((a,b) => a*b)

}

console.log(calculateMulti([2, 3, 4, 2]));




/*

Ejercicio 98
Calcular el área de múltiples círculos a partir de un array de radios:

Entrada: [3, 4, 5]
Salida: [28.27, 50.27, 78.54] (áreas redondeadas a dos decimales)
*/

const calculateArea = (radio) =>{

    let calculateRadio=radio.map((item)=>Math.PI*item**2)
    return calculateRadio.map((item)=>item.toFixed(2))
}

console.log(calculateArea([3, 4, 5]));

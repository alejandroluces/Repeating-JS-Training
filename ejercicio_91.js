/*

Ejercicio 91
Calcular el área de un rectángulo a partir de arrays de longitudes de lados:

Entrada: [{largo: 5, ancho: 3}, {largo: 4, ancho: 2}]
Salida: [15, 8]

*/

const calculateArea=(arr)=>{

    return arr.map((item)=>item.largo*item.ancho)
}

console.log(calculateArea([{largo: 5, ancho: 3}, {largo: 4, ancho: 2}]));

/*

Ejercicio 95
Calcular el descuento aplicado a una lista de precios con un porcentaje dado:

Entrada: [100, 200, 300] y porcentaje de descuento 10%
Salida: [10, 20, 30]

*/

const calculateDiscount = (arr) =>{

    return arr.map((item)=>item*0.1)
}

console.log(calculateDiscount([100, 200, 300]));

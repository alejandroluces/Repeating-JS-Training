/*
Ejercicio 156
Encontrar la cantidad total de elementos en una matriz (array de arrays)
de cualquier tipo de datos (números, cadenas, booleanos, etc.):

Entrada: [[1, 2], ["Hola", "Mundo"], [true, false, true], [3.14, 2.718]]
Salida: 9
*/

const calculateChart = (arrData) =>{

    return arrData.map((item,index) => item.length ).reduce((a,b)=>a+b)

}

console.log(calculateChart([[1, 2], ["Hola", "Mundo"], [true, false, true], [3.14, 2.718]]));

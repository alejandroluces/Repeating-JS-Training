/*
Ejercicio 154
Encontrar el valor mínimo en cada subarray numérico y
 mostrar los resultados en un nuevo array:

Entrada: [[5, 3, 8], [2, 7, 6], [10, 1, 4]]
Salida: [3, 2, 1]
*/

const searchValMin = (arrNum) =>{

    return arrNum.map((item,index) => arrNum[index].reduce((a,b) => a<b ? a :b))

}

console.log(searchValMin([[5, 9, 8], [2, 7, 6], [10, 11, 4]]));

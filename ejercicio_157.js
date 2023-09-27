/*

Ejercicio 157
Calcular la suma de los elementos en cada subarray numérico y 
mostrar los resultados en un nuevo array:

Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]]
Salida: [9, 6, 18]

*/

const sumNumArr = (arrNum) =>{

    return arrNum.map((item,index)=>arrNum[index].reduce((a,b) => a+b))
}

console.log(sumNumArr([[2, 3, 4], [1, 2, 3], [5, 6, 7]]));

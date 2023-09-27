// Ejercicio 148
// Calcular la suma de las filas de una matriz de 
// números y almacenar los resultados en un nuevo array:

// Entrada: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Salida: [6, 15, 24]

const sumArr = (arrNum) =>{

    return arrNum.map ((item, index,arr)=>arrNum[index].reduce((a,b)=>a+b))

}

console.log(sumArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

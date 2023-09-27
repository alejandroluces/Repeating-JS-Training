// Ejercicio 150
// Calcular el producto de los elementos en cada subarray y mostrar los resultados en un nuevo array:

// Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]]
// Salida: [24, 6, 210]

const multElemntArr = (arrNum) =>{

    return arrNum.map((item,index,arr)=>arrNum[index].reduce((a,b)=>a*b))

}

console.log(multElemntArr([[2, 3, 4], [1, 2, 3], [5, 6, 7]]));

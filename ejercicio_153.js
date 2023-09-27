/*
Ejercicio 153
Filtrar elementos en una matriz de números para obtener los que son mayores o 
iguales a un valor dado y mostrar los resultados en una matriz nueva:

Entrada: [[2, 5, 8], [3, 10, 15], [1, 4, 3]] y valor mínimo 5
Salida: [[5, 8], [10, 15]]

*/

const filterElmentArra = (arrNum, min) =>{

    return arrNum.map((item,index)=>arrNum[index].filter((item) => item>=min))

}

console.log(filterElmentArra([[2, 5, 8], [3, 10, 15], [1, 4, 7]], 5));


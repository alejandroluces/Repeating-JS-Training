/*
Ejercicio 168
Filtrar números mayores que un valor dado de una matriz de números y 
mostrar los resultados en una matriz nueva:

Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]] y valor mínimo 4
Salida: [[4], [], [5, 6, 7]]
*/

const filterNum = (arrNum,min) =>{

    return arrNum.map((item)=>item.filter((filtNum)=>filtNum>=min))
}

console.log(filterNum([[2, 3, 4,8], [1, 2, 33], [5, 6, 7]],4));

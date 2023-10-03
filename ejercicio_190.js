/*
Ejercicio 190
Encontrar el primer subarray que contenga un elemento específico en una 
matriz de arrays de números y mostrarlo junto con su índice en el array principal:

Entrada: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] y elemento a buscar 5
Salida: {subarray: [4, 5, 6], indiceArrayExterno: 1, indiceArrayInterno: 0}
*/

const findElemnt = (arrNum,numFind) =>{

    return  arrNum.map((item,index)=>{
        if (item.some((item,index)=>item===numFind)) {
            return{
                subarray: item,
                indiceArrayExterno:index,
                indiceArrayInterno: item.findIndex((item,index)=>item === numFind)

            }}}). filter((item)=>item !== undefined)[0]
}

console.log(findElemnt([[1, 2, 3], [3, 4, 6], [7, 5, 9]],5));

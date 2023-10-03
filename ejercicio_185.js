/*
Ejercicio 185
Encontrar el primer subarray de números que contiene al menos un número negativo 
en una matriz de arrays de números y mostrarlo junto con su índice en el array principal:

Entrada: [[1, 2, 3], [4, -5, 6], [7, 8, 9]]
Salida: {subarray: [4, -5, 6], indiceArrayExterno: 1, indiceArrayInterno: 1}
*/

// const findArrNegative = (arrNegative) =>{

//     return arrNegative.map((item,index)=>{
//         if (item.some((item,index)=>item<0)) {
//             return{
//                 subarray:item,
//                 indiceArrayExterno: index,
//                 indiceArrayInterno: item.findIndex((item)=>item<0)

//             }}}).filter((item)=>item !== undefined)[0]

// }

const findArrNegative = (arrNegative) =>{

    
    return arrNegative.map((item,index)=>{
        if (item.some((item)=>item<0)) {
            return{
                subarray:item,
                indiceArrayExterno:index,
                indiceArrayInterno: item.findIndex((item,index)=>item<0)
            }
        }
    }).filter((item)=>item !==undefined)[0]
}

console.log(findArrNegative([[1, 2, 3], [4, -5, 6], [7, 8, 9]]));
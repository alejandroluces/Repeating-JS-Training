/*
Ejercicio 181
Encontrar el primer número par en una matriz (array de arrays) de números y mostrarlo junto con su índice en el array principal:

Entrada: [[1, 3, 5], [2, 4, 6], [7, 9, 11]]
Salida: {numeroPar: 2, indiceArrayExterno: 1, indiceArrayInterno: 0}
*/

const findNumPar = (arrnumbers) =>{
//   let numPar= arrnumbers.map((item,index)=>item.find((item,idx)=>item%2===0))
//   numPar
//   let findNumPar= numPar.find((item)=>item%2===0)
//   findNumPar
//   let idxExterno= numPar.indexOf(findNumPar)
//   idxExterno 
//   let idxInterno= arrnumbers.map((item,index)=>item.find((item,idx)=>item))
//   idxInterno

    return arrnumbers.map((item,idx)=>{return{
        NumeroPar: item.find((item)=>item%2===0), indiceArrayExterno: idx , indiceArrayInterno: item.findIndex((item)=>item%2===0)
    }}).find((item)=>item.NumeroPar!== undefined)

  
}

console.log(findNumPar([[1, 3, 5], [7, 9, 11],[3, 4, 6]]));

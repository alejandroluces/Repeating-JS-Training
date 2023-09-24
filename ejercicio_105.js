/*

Ejercicio 105
Calcular el producto de cada par de elementos de dos arrays y mostrar el resultado junto con el índice:

Entrada: [2, 3, 4] y [1, 2, 3]
Salida: [{producto: 2, indice: 0}, {producto: 6, indice: 1}, {producto: 12, indice: 2}]

*/

const calculateProduc = (arrOne,arrTwo) =>{

    let duplicateArr = arrOne.map((item,index) => item * arrTwo[index] )
    duplicateArr

    return duplicateArr.map((item,index) =>{return{
        producto: item, indice: index
    }} )

}

console.log(calculateProduc([2, 3, 4] , [1, 2, 3]));

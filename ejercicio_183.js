/*
Ejercicio 183
Encontrar el primer número mayor que un valor dado en una matriz de 
números y mostrarlo junto con su índice en el array principal:

Entrada: [[1, 3, 5], [2, 4, 6], [7, 9, 11]] y valor mínimo 5
Salida: {numeroMayor: 6, indiceArrayExterno: 1, indiceArrayInterno: 2}
*/


const findFirshNumber = (arrNumbers,valMin) =>{

    return arrNumbers.map((item,index) => {return{
        numeroMayor: item.find((item) =>  item>valMin ),
        indiceArrayExterno: index,
        indiceArrayInterno: item.findIndex((item) => item>valMin)
    }}).find((item) =>  item.numeroMayor !== undefined)


}


console.log(findFirshNumber([[1, 6, 5], [2, 4, 6], [7, 9, 11]],0));
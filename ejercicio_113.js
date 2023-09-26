/*

Ejercicio 113
Calcular el producto multiplicando de tres arrays numéricos y mostrar el resultado junto con el índice:
Entrada: [2, 3, 4], [1, 2, 3] y [5, 6, 7]
Salida: [{producto: 10, indice: 0}, {producto: 36, indice: 1}, {producto: 84, indice: 2}]

*/

const calculateProductMultip = (arrOne,arrTwo,arrThree) =>{

    return arrOne.map ((item,index)=>{return{
        producto: item*arrTwo[index]*arrThree[index] , indice:index

    }})

}

console.log(calculateProductMultip([2, 3, 4], [1, 2, 3] , [5, 6, 7]));

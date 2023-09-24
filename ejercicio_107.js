/*

Ejercicio 107
Calcular la diferencia entre dos elementos consecutivos en un array numérico y mostrar el resultado junto con el índice:

Entrada: [5, 8, 12]
Salida: [{diferencia: 3, indice: 0}, {diferencia: 4, indice: 1}, {diferencia: 4, indice: 2}]

*/



const diferencia = (arr) =>{

    return arr.map ((item,index) => {
        return{
            diferencia: arr [index+1] - item ,indice: index
        }
    })


}

console.log(diferencia([5, 8, 12]));

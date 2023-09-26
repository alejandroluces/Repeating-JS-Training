/*
Ejercicio 115
Filtrar elementos de un array de números según si son mayores o iguales a un valor dado y mostrar el resultado junto con el índice:
Entrada: [2, 3, 5, 8] y valor mínimo 4
Salida: [{valor: 5, indice: 2}, {valor: 8, indice: 3}]
*/

const filterNum = (arrNum,valMin) =>{

    let valueMin= arrNum.filter((item)=>item>valMin)
    return valueMin.map ((item,index)=>{return{
        valor:item,indice:index
    }})

}

console.log(filterNum([2, 3, 5, 8],4));

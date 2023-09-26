/*
Ejercicio 141
Encontrar el número mínimo en un array numérico y su índice correspondiente:
- Entrada: [5, 3, 8, 2]
- Salida: {minimo: 2, indice: 3}
*/

const searchValMin = (numbers) =>{
// return  numbers.reduce((acc,el,index)=>{return{
//         minimo: Math.min(...numbers), index
//     }
// })
    return numbers.reduce((acc,el,index)=>{return{
        minimo:Math.min(...numbers),indice: index
    }})
}

console.log(searchValMin([5, 3, 8, 2]));

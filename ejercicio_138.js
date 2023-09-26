/*
Ejercicio 138
Encontrar el número máximo en un array numérico y su índice correspondiente:
- Entrada: [10, 5, 15, 7]
- Salida: {maximo: 15, indice: 3}

*/

const valMax = (arr) =>{

    // return Math.max(...arr)
    return arr.reduce ((acc,el,index)=>{return{
        
        maximo: Math.max(...arr), indice:index
    }})
}

console.log(valMax([10, 5, 15, 7]));

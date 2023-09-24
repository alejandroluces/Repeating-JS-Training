/*

Ejercicio 109
Filtrar elementos de un array de números según si son pares o impares y mostrar el resultado junto con el índice:

Entrada: [2, 3, 5, 8]
Salida: [{valor: 2, esPar: true, indice: 0}, {valor: 3, esPar: false, indice: 1}, {valor: 5, esPar: false, indice: 2}, {valor: 8, esPar: true, indice: 3}]

*/

const validatNumPar = (num) =>{
    let ValidatorParImpar= num.map((item)=>item%2===0)
    
    return num.map ((item,index)=>{return{
        valor: item, esPar: ValidatorParImpar[index], indice: index
    }})

}

console.log(validatNumPar([2, 3, 5, 8]));

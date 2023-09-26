/*
Ejercicio 142
Calcular la multiplicación acumulada de los elementos en un 
array numérico, junto con el índice de cada elemento:
- Entrada: [2, 3, 4, 2]
- Salida: [{producto: 2, indice: 0}, {producto: 6, indice: 1}, 
    {producto: 24, indice: 2}, 
    {producto: 48, indice: 3}]
*/

const calculateMultAcc = (numbers) =>{

    return numbers.map ((item,index)=>{return{
        producto:numbers.slice(0,index+1).reduce((a,b)=>a*b),indice:index
    }})
    // return numbers.map ((item,index)=> numbers.slice(0,index+1).reduce((a,b)=>a+b))

}

console.log(calculateMultAcc([2, 3, 4, 2]));

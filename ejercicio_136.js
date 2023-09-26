/*
Ejercicio 136
Calcular la suma acumulada de todos los elementos en un array 
numérico, junto con el índice de cada elemento:
- Entrada: [2, 4, 6, 8]
- Salida: [{suma: 2, indice: 0}, {suma: 6, indice: 1}, {suma: 12, indice: 2}, {suma: 20, indice: 3}]
*/

const sumAcum = (numbers) =>{

    return numbers.map ((item,index)=> {return{
        suma: numbers.slice(0,index+1).reduce((a,b)=>a+b) , indice:index
    }})
}

console.log(sumAcum([2, 4, 6, 8]));

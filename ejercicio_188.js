/*
Ejercicio 188
Encontrar el primer número divisible por un valor dado en una matriz de números 
y mostrarlo junto con su índice en el array principal:

Entrada: [[2, 3, 4], [7, 8, 9], [10, 12, 15]] y valor para dividir 3
Salida: {numeroDivisible: 3, indiceArrayExterno: 0, indiceArrayInterno: 1}
*/



const searchNumbDivi = (numbers,numDv) =>{

    return numbers.map((item,index)=> {return{
        numeroDivisible: item.find((item) =>  item%3===0), 
        indiceArrayExterno: index,
        indiceArrayInterno: item.findIndex((item) => item%3===0)

    }}).find((item)=> item.numeroDivisible !== undefined)
    

}
console.log(searchNumbDivi([[2, 2, 3], [7, 8, 9], [10, 12, 15]], 3));

/*
Ejercicio 113
Calcular la suma acumulada de elementos en un array numérico y mostrar el resultado junto con el índice:
Entrada: [2, 3, 4, 1, 2]
Salida: [{sumaAcumulada: 2, indice: 0}, {sumaAcumulada: 5, indice: 1}, {sumaAcumulada: 9, indice: 2}, {sumaAcumulada: 10, indice: 3}, {sumaAcumulada: 12, indice: 4}]
*/

const calculateSumAcum = (sum) =>{
    
    return sum.map ((item,index)=> {return{
        sumaAcumulada: sum.slice(0,index+1).reduce ((a,b) => a+b), indice: index
    
    }})

}

console.log(calculateSumAcum([2, 3, 4, 1, 2]));


// Tambien se puede usar solo reduce_______________




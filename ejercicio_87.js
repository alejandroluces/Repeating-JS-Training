/*
Ejercicio 87
Calcular el promedio de dos arrays numéricos: 
Entrada: [10, 15, 20] y [5, 7, 9]
Salida: [7.5, 11, 14.5]

*/

const calculateAverage=(arrOne,arrTwo)=>{

    let sumArr = arrOne.map((item,index)=>item+arrTwo[index])
    return sumArr.map((item)=>item/2)
    // return arrOne.map((item,index)=>(item+arrTwo[index])/2);
}

console.log(calculateAverage([10, 15, 20] , [5, 7, 9]));

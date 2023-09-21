/*
Ejercicio 85
Calcular el producto punto de dos arrays numéricos:
Entrada: [2, 3, 4] y [1, 2, 3]
Salida: 2 + 6 + 12 = 20

*/

const multiplicateAndSumNumb=(arrOne,arrTwo)=>{

    return arrOne.map((item,index)=>item*arrTwo[index]).reduce((a,b)=>a+b)

}

console.log(multiplicateAndSumNumb([2, 3, 4] , [1, 2, 3]));

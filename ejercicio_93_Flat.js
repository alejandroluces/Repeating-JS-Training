/*
Calcula el promedio de la siguientes notas dado un array de notas
[67,80,[45,66,[34,80]90,55,70]33,55,89,]
*/


const calculateAverage=(notes)=>{

    let sumNotes= notes.flat(2).reduce((a,b)=>a+b)
    return sumNotes/notes.flat(2).length
}

console.log(calculateAverage([67,80,45,[34,80,[90],55,70],33,55,89,]));



/*
Ejercicio 93
Multiplicar elementos de dos arrays y sumarlos:

Entrada: [2, 3, 4] y [1, 2, 3]
Salida: 2*1 + 3*2 + 4*3 = 20
*/

const sumMultNum = (arrOne,arrTwo) =>{

    return arrOne.map((item,index)=>item* arrTwo[index]).reduce((a,b)=>a+b)

}

console.log(sumMultNum([2, 3, 4] , [1, 2, 3]));



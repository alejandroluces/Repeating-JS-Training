/*

Ejercicio 81
Duplicar elementos de un array:

Entrada: [2, 4, 6]
Salida: [4, 8, 12]


*/

const duplicateNumbers=(num)=>{

    return num.map((item)=>item*2)

}

console.log(duplicateNumbers([2, 4, 6]));

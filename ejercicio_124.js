/*
Ejercicio 124
Contar la cantidad de veces que aparece un elemento específico en un array:
- Entrada: [1, 2, 3, 2, 4, 2] y elemento a contar 2
- Salida: 3
*/

const qtyNumRepeat = (arr, num) =>{

    // return arr.reduce((acc, el) => el === num ? acc + 1 : acc, 0);
    // return arr.filter ((item)=>item===2).length  // 3
    return arr.reduce ((a,b) => b === num? a + 1 :a,0 )

}

console.log(qtyNumRepeat([1, 2, 3, 2, 4, 2], 2));

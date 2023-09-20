/*

Ejercicio 77: Encontrar el número más frecuente en un array

Planteamiento: Escribe una función que encuentre el número que más veces aparece en un array de números.
Ejemplo de entrada: [2, 3, 2, 8, 2, 9, 4, 2]
Ejemplo de salida: 2

*/

const numMoreRepeat=(num)=>{

    let orden=num.sort((a,b)=>a-b)
    console.log(orden);
    
    let numRepeat=orden.map((e,i)=>orden.lastIndexOf(e)-i)
    
    console.log(numRepeat);
    
    let max=Math.max(...numRepeat)
    console.log(max);
    
    let index=numRepeat.indexOf(max)
    console.log(index);
    
    return orden[index]
}

console.log(numMoreRepeat([2, 3, 2, 8, 2, 9, 4, 2,9,9,9,9]))
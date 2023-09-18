// Ejercicio 59: Reemplazar valores en un array

// Planteamiento: Escribe una función que tome un array de números y utilice el método 
// map para reemplazar ciertos valores por otros.
// Ejemplo de entrada: [1, 2, 3, 4, 5], Valor a reemplazar: 3, Valor de reemplazo: 10
// Ejemplo de salida: [1, 2, 10, 4, 5]

const replaceNum=(arr,ind,num)=>{

    // return arr.map((item)=>item.toString().replace(ind,num))
    return arr.map((item)=>(item===ind ? num : item))

}

console.log(replaceNum([1, 2, 3, 4, 5],3,10));

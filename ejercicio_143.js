/*
Ejercicio 143
Contar la cantidad de veces que aparece un elemento específico
 en un array y mostrar el índice del último elemento encontrado:
- Entrada: [1, 2, 3, 2, 4, 2] y elemento a contar 2
- Salida: {conteo: 3, ultimoIndice: 5}
*/

const countQtyNumRepeat = (numbers, num) =>{

//   const findNum= numbers.filter((el)=>el===num).length;
//     const lastIndex = numbers.lastIndexOf(num);
//     return {conteo:findNum,ultimoIndice:lastIndex}

    const findNum= numbers.filter((item) => item===num).length
    const lastNum= numbers.lastIndexOf(num)
    
    return{conteo: findNum, utimoIndice:lastNum}

}

console.log(countQtyNumRepeat([2,1, 2, 3,10,55,2, 4,2],2));

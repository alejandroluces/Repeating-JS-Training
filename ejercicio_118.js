/*
Ejercicio 118
Encontrar el número máximo en un array numérico:
- Entrada: [10, 5, 15, 7]
- Salida: 15
*/

const searchValMAx = (arrNum) =>{

    // return Math.max(...arrNum)
    return arrNum.sort ((a,b)=>b-a).reduce ((a,b)=>a)

}

console.log(searchValMAx([10, 5, 15, 7]));


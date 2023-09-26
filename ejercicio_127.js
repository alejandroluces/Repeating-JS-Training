/*
Ejercicio 127
Filtrar elementos en un array numérico para obtener los múltiplos de un número dado:
- Entrada: [2, 5, 10, 15, 20] y número para filtrar 5
- Salida: [5, 10, 15, 20]
*/

const filterNum = (arrNum, num) =>{

    return arrNum.filter ((a,b)=> a%num===0)
    // return arrNum.reduce ((a,b)=> b%num===0 ? [...a,b] : a,[])
    
}

console.log(filterNum([2, 5, 10, 15, 20], 5));

/*

Ejercicio 101
Calcular el cuadrado de cada número en un array y mostrar la posición del elemento en el nuevo array:

Entrada: [2, 4, 6]
Salida: [{valor: 4, indice: 0}, {valor: 16, indice: 1}, {valor: 36, indice: 2}]

*/

const calculateNum = (arr) =>{

    return arr.map((item,index, al)=>{
        return{Valor: item**2, Indice:index}
    })

}

console.log(calculateNum([2, 4, 6]));

/*
Ejercicio 114
Crear un nuevo array de objetos a partir de dos arrays de números y un array de operadores, aplicando las operaciones a los números y mostrando el resultado junto con el índice:
Entrada: [5, 8, 12], [2, 3, 4] y ["+","*","-"]
Salida: [{resultado: 7, indice: 0}, {resultado: 24, indice: 1}, {resultado: 16, indice: 2}]

*/

const operationMath = (arrOne,arrTwo,arrThree) =>{
    
    return arrOne.map ((item,index)=>{return{

        resultado: eval(item+arrThree[index]+arrTwo[index]), indice: index

    
    }})

}

console.log(operationMath([5, 8, 12], [2, 3, 4] , ["+","*","-"]));

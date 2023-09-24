/*

Ejercicio 103
Duplicar cada elemento en un array numérico y mostrar si es par o impar:

Entrada: [3, 5, 8]
Salida: [{valor: 6, esPar: true}, {valor: 10, esPar: false}, {valor: 16, esPar: true}]

*/

const validateParOrImpar = (arr) =>{

    let duplicateNum = arr.map((item)=>item*2)
    
    let validator= duplicateNum.map((item,index)=>item%2===0)
    

    return duplicateNum.map((item,index)=>{
        return{valor : item, esPar: validator[index]}
    })

}
console.log(validateParOrImpar([3, 5, 8]));

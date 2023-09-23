/*
Ejercicio 89
Crear un nuevo array de objetos con la suma de propiedades de dos arrays de objetos:
Entrada: [{valor: 5}, {valor: 10}] y [{valor: 3}, {valor: 7}]
Salida: [{valor: 8}, {valor: 17}]
*/

const arr1 = [{valor: 5}, {valor: 10}]
const arr2 = [{valor: 3}, {valor: 7}]

const sumObj = (arrOne, arrTwo) =>{

  return arrOne.map((item,index)=>{
    return{Valor: item.valor + arrTwo[index].valor

    }
  })


}

console.log(sumObj(arr1,arr2));

/*

Ejercicio 90 
Unir dos arrays de nombres y agregarles un saludo:
Entrada: ["Juan", "María"] y ["Smith", "Gómez"]
Salida: ["Hola Juan Smith", "Hola María Gómez"]

*/

const arrNameOne = ["Juan", "María"]
const lastName = ["Smith", "Gómez"]

const addHello=(name,lastName)=>{

    return name.map((item,index)=>`Hola ${item} ${lastName[index]}`)
}

console.log(addHello(arrNameOne,lastName));

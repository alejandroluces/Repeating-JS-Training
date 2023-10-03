/*
Ejercicio 184
Encontrar el primer objeto en una matriz de objetos que cumple con ciertos
 criterios y mostrarlo junto con su índice en el array principal:

Entrada: [{nombre: "Juan", edad: 30}, {nombre: "María", edad: 25}, {nombre: "Carlos", edad: 35}] (encontrar la primera persona mayor de 28 años)
Salida: {nombre: "Juan", edad: 30, indiceArrayExterno: 0}
*/
const peopleAge = [
    {nombre: "Juan", edad: 30}, 
    {nombre: "María", edad: 25}, 
    {nombre: "Carlos", edad: 35}
]
const conditionAge = 28


const findPeople = (nameAge, ageMin) =>{

    return nameAge.find((item,index) => item.edad>ageMin ? item.indiceArrayExterno = index : false)
    // return nameAge.find((item,index)=>{
    //     if (item.edad>ageMin) {
    //         item.indiceArrayExterno = index
    //         return item
    //     }})
}

console.log(findPeople(peopleAge,conditionAge));




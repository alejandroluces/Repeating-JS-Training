/*
Ejercicio 190
Encontrar el primer subarray que contenga un elemento específico en una 
matriz de arrays de números y mostrarlo junto con su índice en el array principal:

Entrada: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] y elemento a buscar 5
Salida: {subarray: [4, 5, 6], indiceArrayExterno: 1, indiceArrayInterno: 0}
*/



const findElemnt = (arrNum,numFind) =>{

    return arrNum.map((item,index) =>{
        if (item.some((item) => item===5)) {
            return{
                subarray:item,
                indiceArrayExterno:index,
                indiceArrayInterno: item.findIndex((item)=> item===5)
            }
        }
    }).find((item)=>item !==undefined)
    
}

console.log(findElemnt([[1, 2, 3], [3, 5, 6], [7, 5, 9]],5));


/*
/*
Ejercicio 184
Encontrar el primer objeto en una matriz de objetos que cumple con ciertos
 criterios y mostrarlo junto con su índice en el array principal:

Entrada: [{nombre: "Juan", edad: 30}, {nombre: "María", edad: 25}, {nombre: "Carlos", edad: 35}] (encontrar la primera persona mayor de 28 años)
Salida: {nombre: "Juan", edad: 30, indiceArrayExterno: 0}
*/

const personAndAge =[
    {nombre: "Juan", edad: 30}, 
    {nombre: "María", edad: 25}, 
    {nombre: "Carlos", edad: 35}
]

const ageRequested = 28

const searchPeople = (personAge, ageMin) =>{

    // return personAge.find((item,index) => item.edad>ageMin ? item.indiceArrayExterno = index : false)

    return personAge.find((item,index) => {return{
        nombre: item.edad>ageMin ? item.indiceArrayExterno = index :false
    }})

}

console.log(searchPeople(personAndAge,ageRequested));



/*
Ejercicio 185
Encontrar el primer subarray de números que contiene al menos un número negativo 
en una matriz de arrays de números y mostrarlo junto con su índice en el array principal:

Entrada: [[1, 2, 3], [4, -5, 6], [7, 8, 9]]
Salida: {subarray: [4, -5, 6], indiceArrayExterno: 1, indiceArrayInterno: 1}
*/

const searcSubArray = (arrNumbers) =>{

    return arrNumbers.map((item,index) => {
        if (item.some((item,index) => item<0)) {
            return{
                subarray: item,
                indiceArrayExterno:index,
                indiceArrayInterno: item.findIndex((item) => item<0 )

            }}}).find((item) => item !== undefined)
}

console.log(searcSubArray([[1, 2, 3], [4, -5, 6], [7, 8, 9]]));

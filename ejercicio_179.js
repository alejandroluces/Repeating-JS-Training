/*
Ejercicio 179
Filtrar objetos de una matriz de objetos que no cumplan con ciertos criterios y 
mostrar los resultados en una matriz nueva:
Entrada: [{nombre: "Juan", edad: 30}, {nombre: "María", edad: 25}, {nombre: "Carlos", edad: 35}] (filtrar personas menores de 28 años)
Salida: [{nombre: "Juan", edad: 30}, {nombre: "Carlos", edad: 35}]
*/

const peopleAge = (arrPeople,age) =>{

    return arrPeople.filter((item)=> item.edad>age )

}

console.log(peopleAge([{nombre: "Juan", edad: 30}, {nombre: "María", edad: 25}, {nombre: "Carlos", edad: 35}],28));

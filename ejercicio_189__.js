/*
Ejercicio 189
Encontrar el primer objeto en una matriz de objetos que tenga una propiedad
 específica y mostrarlo junto con su índice en el array principal:

Entrada: [{nombre: "Juan", ocupacion: "Estudiante"}, {nombre: "María", ocupacion: "Doctor"}, {nombre: "Carlos", ocupacion: "Ingeniero"}] (encontrar la primera persona con ocupación "Doctor")
Salida: {nombre: "María", ocupacion: "Doctor", indiceArrayExterno: 1}
*/

const personProf =[
    {nombre: "Juan", ocupacion: "Estudiante"}, 
    {nombre: "María", ocupacion: "Doctor"}, 
    {nombre: "Carlos", ocupacion: "Ingeniero"}
]
const findProfetion= "Doctor"

const findDoctor = (person, find) =>{

    // return person.find((item,index)=>{

    //     if(item.ocupacion === find){
    //         item.indiceArrayExterno = index;
    //         return item;
    //     }
    // })

    return person.find((item,index)=>item.ocupacion===find? item.indiceArrayExterno=index : false)

}

console.log(findDoctor(personProf,findProfetion));


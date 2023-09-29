/*
Ejercicio 174
Filtrar objetos de una matriz de objetos que tengan una propiedad 
específica y mostrar los resultados en una matriz nueva:

Entrada: [{nombre: "Juan", ocupacion: "Estudiante"}, {nombre: "María", ocupacion: "Doctor"}, {nombre: "Carlos", ocupacion: "Ingeniero"}] (filtrar personas con ocupación "Estudiante")
Salida: [{nombre: "Juan", ocupacion: "Estudiante"}]
*/

const nameProf = [
        {nombre: "Juan", ocupacion: "Estudiante"}, 
        {nombre: "María", ocupacion: "Doctor"}, 
        {nombre: "Carlos", ocupacion: "Ingeniero"}]

const profetionFilter = "Estudiante"

const filterOcupation = (nameOcupation,ocup) =>{

   return nameOcupation.filter((item)=>item.ocupacion===ocup)

}
console.log(filterOcupation(nameProf,profetionFilter));



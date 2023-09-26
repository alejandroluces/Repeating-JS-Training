/*

Ejercicio 112
Crear objetos a partir de tres arrays de nombres, edades y países, mostrando "Nombre: Edad, País":
Entrada: ["Juan", "María"], [30, 25] y ["México", "España"]
Salida: ["Nombre: Juan, Edad: 30, País: México", "Nombre: María, Edad: 25, País: España"]

*/

const names = ["Juan", "María"]
const age = [30, 25]
const country = ["México", "España"]

const craateObj = (nombre,edad,pais) =>{

    return nombre.map ((item,index)=>{return{
        Nombre: nombre [index] , edad: age[index] , pais: pais[index]
    }})

}

console.log(craateObj(names,age,country));

/*

Ejercicio 108
Crear objetos a partir de dos arrays de nombres y edades, mostrando el nombre y la diferencia entre la edad y 30:

Entrada: ["Juan", "María"] y [30, 25]
Salida: [{nombre: "Juan", diferenciaEdad: 0}, {nombre: "María", diferenciaEdad: -5}]

*/

const arrNameAge = (arrOne,arrTwo) =>{

    return arrOne.map((item,index) =>{
        return{
            nombre: item ,diferencia: arrTwo [index]- 30     
        }
    })

}

console.log(arrNameAge(["Juan", "María"] , [30, 25]));

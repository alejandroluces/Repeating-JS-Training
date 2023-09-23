/*
Ejercicio 92
Combinar dos arrays de nombres y sus edades correspondientes en objetos:

Entrada: ["Juan", "María"] y [30, 25]
Salida: [{nombre: "Juan", edad: 30}, {nombre: "María", edad: 25}]
*/

const addAge =(name,age)=> {

    return name.map((item,index)=>{
        
        return{
            Nombre: item,
            Edad:age[index]
        }
    })

}

console.log(addAge(["Juan", "María"] , [30, 25]));


/*

Ejercicio 110
Crear un nuevo array de cadenas de texto a partir de dos arrays de nombres y apellidos, mostrando "Nombre: Apellido":

Entrada: ["Juan", "María"] y ["Smith", "Gómez"]
Salida: ["Nombre: Smith", "Apellido: Gómez"]

*/

const strTextNameLastName = (name,secondName) =>{

    return name.map ((item,index)=>{return{
        Nombre: item, Apellido: secondName[index]
    }})

}

console.log(strTextNameLastName(["Juan", "María"] , ["Smith", "Gómez"]));



/*
Entrada: [{nombre: "Juan", edad: 30}, {nombre: "María", edad: 25}, {nombre: "Carlos", edad: 35}] (filtrar personas mayores de 28 años)
Salida: [{nombre: "Juan", edad: 30}, {nombre: "Carlos", edad: 35}]
*/
const nameAge =[
    {nombre: "Juan", edad: 30}, 
    {nombre: "María", edad: 25}, 
    {nombre: "Carlos", edad: 35}



]
const filteArrObj = (objNamAge) =>{

    return objNamAge.filter((item)=>item.edad>28)

}

console.log(filteArrObj(nameAge));

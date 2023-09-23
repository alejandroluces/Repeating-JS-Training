/*

Ejercicio 99
Unir dos arrays de objetos y agregar una propiedad adicional:

Entrada: [{nombre: "Juan"}, {nombre: "María"}] y [{edad: 30}, {edad: 25}]
Salida: [{nombre: "Juan", edad: 30, saludo: "Hola"}, {nombre: "María", edad: 25, saludo: "Hola"}]

*/

const arrOne = [
    {nombre: "Juan"}, 
    {nombre: "María"}

]
const arrTwo= [
    {edad: 30}, 
    {edad: 25}
]
const merchArr = (twoName,ageTw) =>{
    
 

    return twoName.map((item,index)=>{
        return{...item,...ageTw[index],Saludos:"hola"}
    })
    

}

console.log(merchArr(arrOne,arrTwo));

/*
Ejercicio 367: Filtrar objetos en un Array por una propiedad específica

Entrada: [{nombre: 'Juan', edad: 25}, {nombre: 'Ana', edad: 30}], propiedad: edad, valor mínimo: 28
Salida: [{nombre: 'Ana', edad: 30}]
*/

let personas = [{nombre: 'Juan', edad: 25}, {nombre: 'Ana', edad: 30}];
let propiedad = 'edad';
let valorMinimo = 28;

const filterAge = (arr,prop,age) =>{
    let result =[]
    for ( let i = 0 ; i< arr.length ; i++){
    
        if(arr[i].edad > age){
            result.push(arr[i])
            
        }
        
    }
    return result
    
}

console.log(filterAge(personas,propiedad,valorMinimo));

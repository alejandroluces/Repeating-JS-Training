/*
Ejercicio 358
Ejercicio 8: Crear un subconjunto de propiedades de múltiples objetos en un Array de objetos

Entrada: [{nombre: 'Juan', edad: 25}, {nombre: 'Ana', ciudad: 'Madrid'}], slice(0, 2, {nombre: true})
Salida: [{nombre: 'Juan'}, {nombre: 'Ana'}]
*/
const arrObj = [{nombre: 'Juan', edad: 25}, {nombre: 'Ana', ciudad: 'Madrid'}]

const createSubconjPropier = (arrObj) =>{

    return arrObj.slice().map((item)=>{return{
        nombre: item.nombre
    }}) 
    }

        
//    return arrObj.slice().map((item)=>{

//         const newObj = {}

//         for(let key in item){
//             if(key === 'nombre'){
//                 newObj[key] = item[key]
//             }
//         }
//         return newObj
//     })

console.log(createSubconjPropier(arrObj));

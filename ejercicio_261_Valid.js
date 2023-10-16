/*
Ejercicio 261
Detectar si un Objeto Cumple un Criterio:

Entrada: Un array de objetos y una función de prueba.
Salida: Un ejemplo sería:
Entrada: [ { nombre: "Juan", edad: 25 }, { nombre: "María", edad: 30 }, { nombre: "Carlos", edad: 22 } ], (persona) => persona.edad > 30
Salida: false
*/


const arrPersonAndAge = [ 
    { nombre: "Juan", edad: 35 }, 
    { nombre: "María", edad: 33 }, 
    { nombre: "Carlos", edad: 33 } 
]
const conditions = (persona) => persona.edad > 32

const findPersonAge = (arr,cond) =>{

    return arr.map(cond).includes(false) ? false : true
}

console.log(findPersonAge(arrPersonAndAge,conditions));

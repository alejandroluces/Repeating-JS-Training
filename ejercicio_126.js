/*
Ejercicio 126
Calcular la suma de las edades en un array de objetos que tienen una propiedad 'edad':
- Entrada: [{nombre: "Juan", edad: 30}, {nombre: "María", edad: 25}, {nombre: "Carlos", edad: 35}]
- Salida: 90
*/

const nameAge = [
    {nombre: "Juan", edad: 30}, 
    {nombre: "María", edad: 25}, 
    {nombre: "Carlos", edad: 35}
]

const totalSumAge = (peopleAge) =>{

    return peopleAge.reduce ((a,b) => a + b.edad,0)
    
    
}
console.log(totalSumAge(nameAge));

/*

Ejercicio 145
Calcular la suma de las edades en un array de objetos que tienen una propiedad 'edad', junto con el índice de cada objeto:
- Entrada: [{nombre: "Juan", edad: 30}, {nombre: "María", edad: 25}, {nombre: "Carlos", edad: 35}]
- Salida: [{sumaEdad: 90, indice: 0}]

*/
const nameAge = [
    {nombre: "Juan", edad: 30}, 
    {nombre: "María", edad: 25}, 
    {nombre: "Carlos", edad: 35}


]
const peopleAge = (arr) =>{

    return arr.map ((item,index) =>item.edad).reduce((acc,el,ind)=>acc+el)

}

console.log(peopleAge(nameAge));

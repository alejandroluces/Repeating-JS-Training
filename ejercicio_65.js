// Ejercicio 65: Combinar dos arrays en un objeto

// Planteamiento: Escribe una función que tome dos arrays, uno de claves y otro de valores, y los combine en un objeto.
// Ejemplo de entrada:
// Claves: ['nombre', 'edad', 'ciudad']
// Valores: ['Alejandro', 30, 'Madrid']
// Ejemplo de salida: {nombre: 'Alejandro', edad: 30, ciudad: 'Madrid'}


const mershObj=(keys,values)=>{

    return keys.reduce((obj,key,index)=>{
        
        obj[key] = values[index]
        return obj;

        },{});

}

console.log(mershObj(['nombre', 'edad', 'ciudad'],['Alejandro', 30, 'Madrid']));

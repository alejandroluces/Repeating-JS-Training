/*
Ejercicio 319
Comprobar si un objeto contiene al menos una propiedad específica

Entrada: {nombre: 'Pedro', edad: 35, ciudad: 'Madrid'}
Salida: true
*/

const validateObj = (obj) =>{
    return Object.keys(obj).some((item)=> item === 'nombre')
}

console.log(validateObj({nombre: 'Pedro', edad: 35, ciudad: 'Madrid'})) ;

const numPar = (min,max) =>{
    const newArr=[]
    for (let i= min ; i<max; i++){
    newArr.push(i)
        
    }
    return newArr.map((item)=> item%2!==0 ?`El numero ${item}  es Impar` : `El numero ${item}  es Par`)
}

console.log(numPar(2,13));

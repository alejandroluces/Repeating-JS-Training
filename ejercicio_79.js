// Ejercicio 79: Encontrar el número que falta en una secuencia

// Planteamiento: Escribe una función que tome un array de 
// números secuenciales y encuentre el número que falta en la secuencia.
// Ejemplo de entrada: [1, 2, 3, 5, 6]
// Ejemplo de salida: 4


const arrayNumb=[1, 2, 3,4, 5, 6,7,9]

const searchNum=(num)=>{

    let findNum= num.find((element,index)=>{
        return element+1 != num[index+1]
    })

    return findNum+1

}

console.log(searchNum(arrayNumb))
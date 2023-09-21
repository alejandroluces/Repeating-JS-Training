/*
Ejercicio 80: Calcular la intersección de dos arrays

Planteamiento: Crea una función que tome dos arrays y devuelva un nuevo array con los elementos que están presentes en ambos arrays.
Ejemplo de entrada: [1, 2, 3] y [2, 3, 4]
Ejemplo de salida: [2, 3]

*/

const merchArr=(arrOne,arrTwo)=>{

    let newArr=[]
    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            if(arrOne[i]==arrTwo[j]){
                newArr.push(arrOne[i])
            };
            
        }
        
    }
    
    return newArr
    
}

console.log(merchArr([1, 2, 3,5,6] , [2, 3, 4,1]));

/*
Buscar el elemento más grande en un array:

Planteamiento: Dado un array de números, 
encuentra el número más grande en el array.
Ejemplo de entrada:
javascript
Copy code
[12, 45, 8, 29, 100, 5]
*/
const searhValue = (arrNumbers) =>{

    return arrNumbers.sort((a,b) => a<b ? 1 : -1)[0]
}

console.log(searhValue([12, 45, 8, 29, 100, 5]));



// Extraer los valores unico del siguiente Array

const unicoElemnto = [3, 5, 2, 4, 5, 3, 1, 2]
const resul =   new Set (unicoElemnto)
console.log(Array.from(resul));



/*
7 kyu
Más - menos - más - más - ... - Contar
531591% de 7521.362 de 3.761kdmatrosov2 problemas reportados
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
Cuente con qué frecuencia los cambios de signo en la matriz.

resultado
número desde 0hasta... . Devoluciones de matriz vacía0

ejemplo
const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

// catchSignChange(arr) == 2;
// */

const catchSignChange = (arr) =>{

    // return arr[0] > 0 ? arr.indexOf((item) => item) :false
    if(arr[0] > 0){
        return arr.filter((item) => item<0 ).length
    }if (arr[0] < 0){
        return arr.filter((item) => item>0 ).length
    
    }
    else{
        return 0
    }

}

console.log(catchSignChange([1, -3, -4, 0, 5]));
console.log(catchSignChange([-47,84,-30,-11,-5,74,77]));
console.log(catchSignChange([]));
console.log(catchSignChange([-1,-3,-4,-5]));
console.log(catchSignChange([-8,4,-1,5,-3,-3,-2,-2]));





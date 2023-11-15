/*
Cuadrar (raíz) o no cuadrar (raíz)
39414593% de 3.99412.312 de 29.085usuario5036852
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
Escriba un método que obtenga una matriz de números enteros como parámetro y procese cada número de esta matriz.

Devuelve una nueva matriz procesando cada número de la matriz de entrada de esta manera:

Si el número tiene una raíz cuadrada entera, se toma esta; de lo contrario, se eleva el número al cuadrado.

Ejemplo
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notas
La matriz de entrada siempre contendrá solo números positivos y nunca estará vacía o nula.
*/

const squareOrSquareRoot = (array) =>{
    let result= array.map((item) => Math.sqrt(item))
    return result.map((item) => Number.isInteger(item) ? item : Math.round(item**4))
    
    // return arrayNum.map((item2) => Number.isInteger(item2) ? item2 : item2*item2)
}

console.log(squareOrSquareRoot([4,3,9,7,2,1]));
// console.log(squareOrSquareRoot([4,3,9,7,2,1]));





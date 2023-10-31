/*
8 kyu
Suma sin número mayor y menor
114725388% de 7.10725.630 de 73.269usuario5036852
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
Tarea
Suma todos los números de una matriz determinada (cq. list), excepto el elemento más alto y el más bajo (¡por valor, no por índice!).

El elemento más alto o más bajo respectivamente es un único elemento en cada borde, incluso si hay más de uno con el mismo valor.

Cuidado con la validación de entrada.
https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
Ejemplo
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/
  
const sumArray = (array) => {
    if (array=== null || array.length <=2) {
        return 0
    }else{
         return array.sort((a,b)=>a-b).slice(1,-1).reduce((a,b)=> a+b ,0)
    }
   
}
console.log(sumArray([ 6, 2, 1, 8, 10 ]));
console.log(sumArray([ 0, 1, 6, 10, 10 ]));
console.log(sumArray([1]));
console.log(sumArray([ -6, -20, -1, -10, -12 ]));
console.log(sumArray([ -6, 20, -1, 10, -12 ]));
console.log(sumArray([null]));
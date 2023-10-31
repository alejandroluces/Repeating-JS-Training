/*

Elementos de matriz comunes
1151792% de 261545 de 1.270KenKamau
 javascript
Nodo v8.1.3
EMPUJE
EMACS
Instrucciones
Producción
Dadas tres matrices de números enteros, devuelve la suma de los elementos que son comunes en las tres matrices.

Por ejemplo:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays
Más ejemplos en los casos de prueba.
*/

const common = (a,b,c) =>{
   
    
    let result = a.filter((item,index) => b.indexOf(item)!== -1)
    result
    return result.reduce((acc,ac) => acc+ac , 0)
    // return allNumbers.filter(item=> deleteNmber.indexOf(item) !== -1 )
    // return a.filter(elemento => b.indexOf(elemento) !== -1 && c.indexOf(elemento) !== -1).reduce((a,b) => a + b ,0)

 
}
console.log(common([1,2,3],[5,3,2],[7,3,2]));
// console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]));



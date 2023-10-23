/*
8 kyu
Devolución negativa
109826091% de 19.676110.556 de 277.097decanodos
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
En esta sencilla tarea te dan un número y tienes que hacerlo negativo. ¿Pero tal vez el número ya sea negativo?

Ejemplos
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notas
El número ya puede ser negativo, en cuyo caso no se requiere ningún cambio.
El cero (0) no se verifica para ningún signo específico. Los ceros negativos no tienen sentido matemático.
*/

const makeNegative = (num) => {

    return num > 0 ? num - num*2 : 0 && num === 0 ? 0 : num 

    // return -Math.abs(num)
    

}
console.log(makeNegative(42));



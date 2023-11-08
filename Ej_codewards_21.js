// Suma las cuerdas
// 3438092% de 4.37823.176 de 44.586K-Calderón-ASC1 problema reportado
//  javascript
// Nodo v18.x
// EMPUJE
// EMACS
// Instrucciones
// Producción
// Cree una función que tome 2 números enteros en forma de cadena como entrada y genere la suma (también como una cadena):

// Ejemplo: ( Entrada1, Entrada2 -->Salida )

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notas:

// Si alguna de las entradas es una cadena vacía, considérela como cero.

// Las entradas y la salida esperada nunca excederán el límite de enteros de 32 bits con signo ( 2^31 - 1)

const sumStr = (a,b) => {
    
    return (Number(a) + Number(b)).toString()
    
  }
  console.log(sumStr("4","5"));
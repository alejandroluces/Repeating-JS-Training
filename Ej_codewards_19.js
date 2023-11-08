//     8 kyu
// elegir un conjunto de primeros elementos
// 844290% de 1.5075.710 de 9.076darlanmendonca1 problema reportado
//  javascript
// Nodo v18.x
// EMPUJE
// EMACS
// Instrucciones
// Producción
// Escribe una función para obtener los primeros elementos de una secuencia. Pasar un parámetro n(predeterminado = 1) devolverá los primeros nelementos de la secuencia.

// Si n== 0devuelve una secuencia vacía[]

// Ejemplos
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];
const arr = ['a', 'b', 'c', 'd', 'e'];

const first = (arr, n=1) => {
    return arr.slice(0,n)
    // return arr.slice(n-n,n)
  }
  console.log(first(arr));

  console.log(first(arr,2));
  console.log(first(arr,3));

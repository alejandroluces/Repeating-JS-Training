// let arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(arrays.flat())
// // → [1, 2, 3, 4, 5, 6]



// console.log(dos);
// let numero = 50;
// while (numero <= 56) {
//   console.log(numero);


// }
const numParOrImpar = (min,max) =>{
  const result = []
  for(let i = min ; i<=max ; i++){
    result.push(i%2!==0 ? `el numero ${i}Es impar` : `el numero ${i}Es par`)
  }
  return result
}

console.log(numParOrImpar(10,20));

console.log();

var x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}

// y no es visible desde aqui
console.log(x + z);
//

const envolverValor =(n)=> {
  let local = n;
  return ()=> local*2;
}

let envolver1 = envolverValor(9);
let envolver2 = envolverValor(2);
console.log(envolver1());
// → 1
console.log(envolver2());
// → 2

/*
Ejercicio 321
Comprobar si todos los números en un Array son positivos

Entrada: [5, 8, -3, 10, 2]
Salida: false
*/
const validateArr = (arrNumbers) =>{

  return arrNumbers.every((number)=> number > 0);

}

console.log(validateArr([5, 8, 3, 10, 2]));




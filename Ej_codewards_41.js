const isDigit  = (s) => {

  // La funcion isDigit recibe un string y debe devolver true si es un numero y false si no lo es
  // Ejemplos:
  // isDigit("3") => true
  // isDigit("  3  ") => false
  // isDigit("-3.23") => true
  // isDigit("3-4") => false
  // isDigit("  3   5") => false
  // isDigit("3 5") => false
  // isDigit("zero") => false

  // Tu código:
  let result = false
  if(!isNaN(s)){
    result = true
  }
  return result
     
    
  
}

console.log(isDigit("-34.4"));
console.log(isDigit("534.4"));
console.log(isDigit("ss4"));
console.log(isDigit("zero"));
console.log(isDigit("3-4"));






  



//Del siguiente array ordenar lo numeros impares de menor a mayor manteniendo su posicion original

const arr = [5,3,2,8,1,4]
const oddSort = (arr) => {
  // la salida debe ser [1,3,2,8,5,4]
  let odd = arr.filter((item) => item % 2 !== 0).sort((a,b) => a-b)
  let even = arr.filter((item) => item % 2 === 0)
  let result = []
  let count = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      result.push(odd[count])
      count++
    }else{
      result.push(even[i-count])
    }
  }
  return result
}
console.log(oddSort(arr));


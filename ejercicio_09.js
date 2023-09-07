// // Cree una función que devolverá una cadena que combine todas las 
// letras de las tres cadenas ingresadas en grupos. 
// Tomando la primera letra de todas las entradas y agrupándolas una al lado de la otra. 
// ¡Haga esto para cada letra, vea el ejemplo a continuación!

// Por ejemplo, Entrada: "aa", "bb", "cc" => Salida: "abcabc"


const merchStr=(strOne,strTwoo,strTree)=>{

  return strOne.split("").map((item,let)=>item+strTwoo[let]+strTree[let])
  
}
console.log(merchStr("aa", "bb", "cc"));

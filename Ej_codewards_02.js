/**
 Tienes que crear una función llamada ReverseIt.

Escriba su función de modo que, en el caso de que se pase una cadena
 o un número como datos, devuelva los datos en orden inverso. Si los
  datos son de cualquier otro tipo, devuélvalos tal como están.

Ejemplos de entradas y salidas posteriores:

"Hello" -> "olleH"

"314159" -> "951413"

[1,2,3] -> [1,2,3]
 */

const reverseIt = (data) =>{

    // if(typeof data === 'string' || typeof data === 'number'){
    //     return data.toString().split('').reverse().join('')
    // }else{
    //     return data
    // }

    return typeof data==="string"|| typeof data ==="number"? data.toString().split("").reverse().join("") : data

}

console.log(reverseIt('Hello'))
console.log(reverseIt(314159));
console.log(reverseIt("314159"));

;


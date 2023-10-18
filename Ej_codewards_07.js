
let palabra = "Dabale arroz a la zorra el abad"

const isPalindromo = (str) =>{

    // let reverse=str.split("").reverse().join("").replaceAll(" ","")
    // reverse
    return str.toLowerCase().split("").join("").replaceAll(" ","") === str.toLowerCase().split("").reverse().join("").replaceAll(" ","") ? `Es Palindromo` : `No Es Palindromo`
}

console.log(isPalindromo(palabra));


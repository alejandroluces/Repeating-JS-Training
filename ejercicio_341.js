// / Este es bastante simple: se le dará una matriz. Los valores de la matriz serán números o cadenas, o una combinación de ambos. No obtendrá una matriz vacía ni escasa.

// // Su trabajo es devolver una única matriz que tenga primero los números ordenados en orden ascendente, seguidos de las cadenas ordenadas en orden alfabético. Los valores deben mantener su tipo original.

// Tenga en cuenta que los números escritos como cadenas son cadenas y deben ordenarse con las otras cadenas. Entrada: ["Banana", "Orange", "Apple", "Mango", 0, 2, 2]. Salida: [ 0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange' ]


const arrNumStr= [ 1110, 20,0, 12, 'Apple', 'Banana',"damasco","cala", 'Mango', 'Orange' ]

const orderArrAlphabetAndOder = (arr) =>{

    let orderStr= arr.filter((item)=> typeof item ==="string" ).sort((a,b)=>a.localeCompare(b))
    orderStr
    let orderNum= arr.filter((item)=> typeof item === "number" ).sort((a,b)=>a-b)
    orderNum
    return[...orderNum,...orderStr]
    // return arr.map((item) => typeof item==="number"? item.sort((a,b)=>a-b):false )

}
console.log(orderArrAlphabetAndOder(arrNumStr));
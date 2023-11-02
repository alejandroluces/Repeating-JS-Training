


//
const strExmple = "Rapido corren los carros"

const validateStr = (str) => {

    return str.split(/[A-Z]/)

}
console.log(validateStr(strExmple));

console.log([10,2,6].filter((item,index)=>item%index===0));
const dev= [10,2,6]
console.log(Math.min(...dev));











const diferenciaDeArreglos = (arr1, arr2) => {
	return arr1.filter(elemento => arr2.indexOf(elemento) !== -1);
}
console.log(diferenciaDeArreglos([1,2,3,8],[5,3,2,8]));


const palabra1="abcde"
const palabra2="abcde"
console.log(palabra2.localeCompare(palabra1));

const result= palabra1.localeCompare(palabra2)===0 ? `Coincide` : `Es distinto`
console.log(result);


/*
// Dada una cadena de palabras (x), debe devolver una matriz de palabras, ordenadas alfabéticamente por el carácter final de cada una.

// Si dos palabras tienen la misma última letra, la matriz devuelta debería mostrarlas en el orden en que aparecieron en la cadena dada.

// entrada: 'man i need a taxi up to ubud'
// salida: ['a','need','ubud', 'i','taxi','man','to','up']
*/



const orderAlpha = (str) =>{

    // return str.split("").reverse().join("").split(" ").sort((a,b) => a > b ? 1:-1).map((item) => item.split("").reverse().join(""))
    return str.split(" ").map((item)=> item.slice(-1)).sort((a,b)=>a>b ? 1 : -1 )
}

console.log(orderAlpha('man i need a taxi up to ubud'));


/*
 ¿Qué pasa si necesitamos que la longitud de las palabras separadas por un espacio se agregue al 
 final de esa misma palabra y se devuelva como una matriz?

// Ejemplo (Entrada --> Salida)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Su tarea es escribir una función que tome un String y devuelva un 
Array/list con la longitud de cada palabra agregada a cada elemento.

// Nota: String tendrá al menos un elemento; las palabras siempre estarán separadas por un espacio.

*/
const strWords = "apple ban"
const strWords2 = "you will win"

const convertStrInArr = (str) =>{

    return str.split(" ").map((item)=>`${item} ${item.length}`)
}

console.log(convertStrInArr(strWords));
console.log(convertStrInArr(strWords2));


//____________________________________

/*
Eliminar Duplicados en un Arreglo:

Planteamiento: Escribe una función que elimine los elementos duplicados de 
un arreglo y devuelva un nuevo arreglo con valores únicos.

Ejemplo:

Entrada: [1, 2, 2, 3, 4, 4, 5]
Salida: [1, 2, 3, 4, 5]
*/
const arrNumbers =[1, 2, 2, 3, 4, 4, 5]

const deletteNumbersDuplicate = (arrNum) =>{

    // let result = new Set(arrNumbers)
    // return [...result]
    return arrNum.filter((item,index)=>{return arrNum.indexOf(item)===index})
        
}

console.log(deletteNumbersDuplicate(arrNumbers));


//



const array1 = [1, 2, 3];
const array2 = [4,5,6];
const arrComb= [...array1,...array2]
console.log(arrComb);


const objeto1 = { a: 1, b: 2 };
const objeto2 = { c:3,c:4 };
let result2 = {...objeto1,...objeto2}
console.log(result2);


// Convertir una Lista de Amigos en un Array de Objetos de Usuarios:
// 	Entrada: Una lista de amigos en formato de texto con nombres y edades.
// 	Salida: Un ejemplo sería:
// 		Entrada: "Ana (25), Juan (30), María (22)"
// Salida: [{ nombre: 'Ana', edad: 25 }, { nombre: 'Juan', edad: 30 }, { nombre: 'María', edad: 22 }]

const strPerson= "Ana (25), Juan (30), María (22), Jose (22)"
const createArrObj = (str) =>{
    let deleteParentesis= str.replace(/[(,)]/g, "").split(" ")
    deleteParentesis
    return deleteParentesis.map((item,index2)=> {return{
        nombre: deleteParentesis.map((item,index)=> index%2===0 ? item : null).filter((item)=> item!==null)[index2],
        edad: deleteParentesis.map((item,index)=> index%2!==0 ? item : null).filter((item)=> item!==null)[index2]
    }}).filter((item)=> item.nombre!==undefined)
}
console.log(createArrObj(strPerson));

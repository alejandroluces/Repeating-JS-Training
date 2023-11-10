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


/*
Encontrar el primer nombre con más de cierta cantidad de caracteres:
// Planteamiento: Escribe una función que tome un array de nombres y una longitud mínima como entrada,
 y devuelva el primer nombre en el array que tenga más caracteres que la longitud mínima.

// Entrada: ["Alice", "Bob", "Charlie", "David", "Eve"], Longitud mínima: 6
// Retorno: "Charlie"
*/

const arraNames = ["Alice", "Bob", "Charlie", "David", "Eve","alejandro"]

const longitud = 6

const extrarNamesLongitudMin = (arr,longer) =>{

    return arr.find((item) => item.length > longer)

}

console.log(extrarNamesLongitudMin(arraNames,longitud));


/*
escribir una funcion que reciba un array de animales como parametros y una letra, debe devolver en 
un nuevo array los animales que comiencen con esa letra especifica

// entrada: ["oso", "aguila", "alcabaran", "pollo"], "a"

// salida: [ 'aguila', 'alcabaran' ]
*/

const searchAnimals = (arr,letter) =>{

    return arr.filter((item)=>item[0].toLowerCase() ===letter)

}

console.log(searchAnimals(["oso", "Aguila", "alcabaran", "pollo"], "a"));



/*
//Este kata toma estrictamente dos palabras con un espacio entre ellas.

//La salida debe ser dos letras mayúsculas con un punto separándolas.
// entrada: "Jose Saavedra"
// salida: J.S
*/

const initialNames = (str) =>{

    return str.split(" ").map((item) => item[0]).join(".")
}

console.log(initialNames("Jose Saavedra"));


/*
Queremos saber el índice de las vocales en una palabra dada, por ejemplo, hay dos vocales en la palabra super (la segunda y cuarta letras).

// Entonces, dada una cadena "super", deberíamos devolver una lista de [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTAS
// Las vocales en este contexto se refieren a: aeiouy (incluidas las mayúsculas)
// Esto está indexado desde [1..n](¡no indexado a cero!)Queremos saber el índice de las vocales en una palabra dada, por ejemplo, hay dos vocales en la palabra super (la segunda y cuarta letras).

// Entonces, dada una cadena "super", deberíamos devolver una lista de [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTAS
// Las vocales en este contexto se refieren a: aeiouy (incluidas las mayúsculas)
// Esto está indexado desde [1..n](¡no indexado a cero!)
*/

const  searchIndex = (str) =>{

    return str.split("").map((item, index) => {
        return item.match(/[aeiouy]/gi) ? index+1 : item
    } ).filter((iteNum) => typeof(iteNum) === "number")

}

console.log(searchIndex("Super"));
console.log(searchIndex("YoMama"));

/*
// Complete la función de suma cuadrada para que cuadre cada número que se le pasa y luego sume los resultados.

// Por ejemplo, [1, 2, 2] debería regresar 9 porque
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
*/

const sumNumbersSquared = (arrNumbers) =>{

    return arrNumbers.map((item) => item**2).reduce((acc,ac) => acc + ac , 0)

}

console.log(sumNumbersSquared([1, 2, 2]));



/*
// Deben incluirse todos los caracteres que no sean vocales, 
incluidos los caracteres no alfabéticos (espacios, comas, etc.).

// Ejemplos:
// vowelOne( "abceios" ) // "1001110"
// vowelOne( "aeiou, abc" ) // "1111100100"
*/

// replace(/[(,)]/g, "")
const vowelOne = (str) =>{

    return str.split("").map((item) =>item.replace(/[aeiou]/g, "") ? 0 : 1).join("") 
}
console.log(vowelOne("abceios"));



/*

/ Dada una serie de números, verifique si alguno de los números es el código de caracteres para vocales minúsculas ( a, e, i, o, u).

// Si es así, cambie el valor de la matriz a una cadena de esa vocal.

// Devuelve la matriz resultante.
 */
// entrada: [101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]

// salida: [
//     'e', 121, 110, 113,
//     113, 103, 121, 121,
//     'e', 107, 103
//   ]

const isVow = ( a) =>{
    
    return a.map((item) => String.fromCharCode(item).replace(/[^aeiou]/g, "") ? String.fromCharCode(item):item )

}

console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));


/*
// Dadas dos matrices, a1 y a2, ordene los elementos de a2 según el índice de la palabra en a1 que comienza con la misma letra.

// Ejemplo 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']

// Ejemplo 2
// a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
// a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

// returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
// Cada elemento de las matrices comenzará con una letra única, por lo que solo habrá una coincidencia para cada elemento.
*/

a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

const orderArr = (arr1,arr2) =>{
   
    return arr1.map((item)=> arr2.find((ite)=>ite[0] === item[0]))

}

console.log(orderArr(a1,a2));


/*
// Escriba la función alternateCase que cambia cada letra de la cadena de superior a inferior y de inferior a superior. Por ejemplo: Hola Mundo -> HOLA MUNDO
*/

const reverseTolowecase = (str) =>{

    return str.split("").map((item)=>item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()).join("")
}

console.log(reverseTolowecase("Hola Mundo"));


/*
/ Supongamos que tenemos un array de objetos que representan productos en un sitio web de compras. Cada objeto tiene las siguientes propiedades: name (nombre del producto), price (precio minimo y maximo del producto), category (categoría del producto) y stock (cantidad de unidades en stock). Queremos implementar una función que filtre los productos por categoría y precio, y que devuelva un nuevo array con los productos que cumplen con los criterios.

const products = [
  { name: 'Camiseta', price: 30, category: 'ropa', stock: 10 },
  { name: 'Zapatillas', price: 50, category: 'calzado', stock: 5 },
  { name: 'Pantalón', price: 30, category: 'ropa', stock: 7 },
  { name: 'Reloj', price: 100, category: 'accesorios', stock: 3 },
  { name: 'Gorra', price: 15, category: 'accesorios', stock: 12 }
];

// Ejemplo de Entrada: filterProducts(products, 'ropa', 25, 35)
// Ejempĺo de salida : [{ name: 'Pantalón', price: 30, category: 'ropa', stock: 7 }]
*/

const products = [
    { name: 'Camiseta', price: 30, category: 'ropa', stock: 10 },
    { name: 'Zapatillas', price: 50, category: 'calzado', stock: 5 },
    { name: 'Pantalón', price: 30, category: 'ropa', stock: 7 },
    { name: 'Reloj', price: 100, category: 'accesorios', stock: 3 },
    { name: 'Gorra', price: 15, category: 'accesorios', stock: 12 }
  ];

  const searchProduc = (arrObj,categ,precio) =>{
    return arrObj.filter((item) => item.category===categ && item.price === precio)
  }

  console.log(searchProduc(products,"ropa",30));
  

  /*
  // Supongamos que tenemos un array de objetos que representan estudiantes universitarios. Cada objeto tiene las siguientes propiedades: name (nombre del estudiante), age (edad del estudiante), major (carrera que estudia el estudiante) y grades (array de calificaciones del estudiante en diferentes materias). Queremos implementar una función que calcule el promedio de calificaciones de todos los estudiantes en una carrera determinada y que devuelva un objeto que contenga el promedio y la cantidad de estudiantes de la carrera.

const students = [
    { name: 'Juan', age: 21, major: 'ingeniería', grades: [8, 7, 9, 8, 10] },
    { name: 'María', age: 20, major: 'medicina', grades: [9, 9, 9, 8, 10] },
    { name: 'Pedro', age: 22, major: 'ingeniería', grades: [6, 7, 7, 8, 6] },
    { name: 'Ana', age: 19, major: 'arquitectura', grades: [7, 8, 6, 7, 9] },
    { name: 'Carlos', age: 20, major: 'medicina', grades: [8, 7, 9, 9, 10] }
  ];
  // Ejemplo de Entrada: calculateAverageByMajor(students, 'ingeniería')
  // Ejempĺo de salida : { average: 7.6, numberOfStudents: 2 }
  */

  const students = [
    { name: 'Juan', age: 21, major: 'ingeniería', grades: [8, 7, 9, 8, 10] },
    { name: 'María', age: 20, major: 'medicina', grades: [9, 9, 9, 8, 10] },
    { name: 'Pedro', age: 22, major: 'ingeniería', grades: [6, 7, 7, 8, 6] },
    { name: 'Ana', age: 19, major: 'arquitectura', grades: [7, 8, 6, 7, 9] },
    { name: 'Carlos', age: 20, major: 'medicina', grades: [8, 7, 9, 9, 10] },
    { name: 'Alejo', age: 21, major: 'ingeniería', grades: [8, 7, 9, 8, 9] }
  ]
  const carrera = "ingeniería"

  const extraeStudent = (students,carrer) =>{
    
    let averageStudent = students.filter((item) => item.major===carrera)
    // averageStudent
    let totalAverge = averageStudent.map((item)=>item.grades).map((item2)=>item2.reduce((acc,ac)=>acc+ac)/item2.length)
    // totalAverge
    return {
            average: totalAverge.reduce((a,b)=>a+b)/totalAverge.length,
            numberOfStudents: averageStudent.length
        }
  }

  console.log(extraeStudent(students,carrera));
  


const strictEqual = (toAlternatingCase) =>{

    return toAlternatingCase.split("").map((item) => item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()).join("")
}

console.log(strictEqual("Hola Mundo"));
console.log(strictEqual("12345"));
console.log(strictEqual("1a2b3c4d5e"));
console.log(strictEqual("String.prototype.toAlternatingCase"));






const neutralise = (s1, s2) => {
    // Here be dragons!
    return s1.split("").map((item, index) => item === s2[index] ? item : 0 ).join("")
  }
  console.log(neutralise("--++--", "++--++"));
  



  const twiceAsOld = (dadYearsOld, sonYearsOld) => {
    // your code here
    return dadYearsOld > sonYearsOld ? Math.abs(dadYearsOld - (sonYearsOld * 2))   : 0 
  }

  console.log(twiceAsOld(36,7));
  console.log(twiceAsOld(55,30));

  const abbrevName = (name) =>{

    return name.split(" ").map((item) =>item[0]).join(".").toUpperCase()
  }
  console.log(abbrevName("Sam Harris"));
  


  const min = (list) =>{
    
    return Math.min(...list)
}
console.log(min(([-52, 56, 30, 29, -54, 0, -110])));


const max = (list) => {
    
    return Math.max(...list)
}

console.log(max([4,6,2,1,9,63,-134,566]));





const sumStr = (a,b) => {
    
    return (Number(a) + Number(b)).toString()
    
  }
  console.log(sumStr("4","5"));
  




  const monkeyCount =(n) => {
        let result=[]
        for (let i = 1; i <= n; i++) {
            
            result.push(i)
            
        }
        
        return result
    
        
    }

    console.log(monkeyCount(5));

    console.log(monkeyCount(10));

    
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

  




  const keysAndValues = (data) =>{

    // let value= Object.values(data)
    // return [Object.keys(data),value]
        return [Object.keys(data), Object.values(data)]
  }
  console.log(keysAndValues({a: 1, b: 2, c: 3}));




//   Multiplication table for number
//   4058187% of 3,24012,590 of 31,881Dmitry Kudla1 Issue Reported
//    JavaScript
//   Node v18.x
//   VIM
//   EMACS
//   Instructions
//   Output
//   Past Solutions
//   Your goal is to return multiplication table for number that is always an integer from 1 to 10.
  
//   For example, a multiplication table (string) for number == 5 looks like below:
  
//   1 * 5 = 5
//   2 * 5 = 10
//   3 * 5 = 15
//   4 * 5 = 20
//   5 * 5 = 25
//   6 * 5 = 30
//   7 * 5 = 35
//   8 * 5 = 40
//   9 * 5 = 45
//   10 * 5 = 50
//   P. S. You can use \n in string to jump to the next line.
  
//   Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

  const multiTable = (number) => {
    
   let numToMultiplicate= []
    for (let j = 1; j <= 10; j++) {
        
        numToMultiplicate.push(j)
    }
    return numToMultiplicate.map((item)=> `${item} * ${number} = ${number*item}`).join("\n")

  }
  console.log(multiTable(5));
  
//   '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');



/*
Merge two sorted arrays into one
28615393% of 2,96419,830 of 30,218Y.y1 Issue Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


*/

function mergeArrays(arr1, arr2) {
  return[...arr1,...arr2]
}

console.log(mergeArrays([1,2,3,4], [5,6,7,8]));

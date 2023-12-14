/*
Ejercicio 168
Filtrar números mayores que un valor dado de una matriz de números y 
mostrar los resultados en una matriz nueva:

Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]] y valor mínimo 4
Salida: [[4], [], [5, 6, 7]]
*/

const filterNum = (arrNum,min) =>{

    return arrNum.map((item)=>item.filter((filtNum)=>filtNum>=min))
}

console.log(filterNum([[2, 3, 4,8], [1, 2, 3], [5, 6, 7]],4));

const arrDev = [[2, 3, 4], [1, 2, 3], [5, 6, 7]]

const deleteDupl = (arr) =>{
    let converArr = arr.flat()
    // return converArr.filter((item,index) => converArr.indexOf(item)===index)

    return [...new Set(converArr)]
}

console.log(deleteDupl(arrDev));
console.log([...arrDev]);


/*
Extraer la nota mas baja del siguiente arr de objeto:

[
    {nombre: Alejandro,materia: matematica, nota:16},
    {nombre: Jose,materia: matematica, nota:12},
    {nombre: Garcia,materia: matematica, nota:16}

]

*/

const arrNote = [
    {nombre: "Alejandro",materia: "matematica", nota:16},
    {nombre: "Jose",materia: "matematica", nota:12},
    {nombre: "Garcia",materia: "matematica", nota:16}

]

const findNoteAlt = (arrObj) =>{

    return arrObj.sort((a,b) => a.nota > b.nota ? 1 :-1)[0]
    
}

console.log(findNoteAlt(arrNote));


const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: 212 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  let result = items.reduce((acc, ac) => acc.value < ac.value ? acc : ac)

  console.log(result);
  

  /*
  Ejercicio 144
Encontrar la cadena más larga en un array de cadenas de texto y mostrar su índice:
- Entrada: ["manzana", "plátanoMaduro", "sandía", "kiwi"]
- Salida: {cadenaMasLarga: "sandía", indice: 2}
  */
const strFruit = ["manzana", "plátanoMaduro", "sa", "kiwi"]

const searchIndexStrMoreLong = (str) => {

    let strLong = str.reduce((a,b) => b.length < a.length ? a : b)
    return {
        cadenaMasLarga:strLong,
        indice: str.indexOf(strLong)
    }

}
console.log(searchIndexStrMoreLong(strFruit));



// Ejercicio 150
// Calcular el producto de los elementos en cada subarray y mostrar los resultados en un nuevo array:

// Entrada: [[2, 3, 4], [1, 2, 3], [5, 6, 7]]
// Salida: [24, 6, 210]


const arrNumbers = [[2, 3, 4], [1, 2, 3], [5, 6, 7]]

const sumNum = (numbers) =>{

    return numbers.map((item) => item.reduce((acc,ac) => acc*ac))
}

console.log(sumNum(arrNumbers));

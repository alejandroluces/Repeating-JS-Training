// Ejercicio 55: Filtrar palabras por longitud en un array de frases

// Planteamiento: Escribe una función que tome un array de frases y un número mínimo de caracteres como entrada, 
// y utilice el método map para filtrar las palabras en cada frase que tengan al menos la longitud especificada.
// Ejemplo de entrada: ['Hoy es un buen día', 'JavaScript es poderoso'], Longitud mínima: 5
// Ejemplo de salida: [['buen'], ['JavaScript', 'poderoso']]

const filtChartMin=(str,min)=>{

    let separarStr=str.join(" ").split(" ").map((item)=>item)
    
    return separarStr.filter((word)=>word.length>=min)
    

}

console.log(filtChartMin(['Hoy es un buen día', 'JavaScript es poderoso'],4));

// Ejercicio 57: Obtener el primer carácter de cada cadena en un array

// Planteamiento: Escribe una función que tome un array de cadenas y utilice el
//  método map para obtener el primer carácter de cada cadena.
// Ejemplo de entrada: ['Manzana', 'Banana', 'Cereza']
// Ejemplo de salida: ['M', 'B', 'C']

const obtFirshChartWord=(arr)=>{

    return arr.map((item)=>item.charAt())
}

console.log(obtFirshChartWord(['Manzana', 'Banana', 'Cereza']));

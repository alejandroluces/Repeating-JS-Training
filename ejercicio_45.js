// Ejercicio 45: Calcular la longitud de las cadenas en un array

// Planteamiento: Crea una función que tome un array de cadenas como entrada y utilice el método map para calcular la longitud de cada cadena.
// Ejemplo de entrada: ['Manzana', 'Banana', 'Cereza']
// Ejemplo de salida: [7, 6, 6]

const longitudCadenas = (arr) => {

    return arr.map((item)=>item.length)

}

console.log(longitudCadenas(['Manzana', 'Banana', 'Cereza']));



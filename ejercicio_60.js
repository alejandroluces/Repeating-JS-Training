// Ejercicio 60: Obtener el último carácter de cada cadena en un array

// Planteamiento: Crea una función que tome un array de cadenas y utilice el 
// método map para obtener el último carácter de cada cadena.
// Ejemplo de entrada: ['Manzana', 'Banana', 'Cereza']
// Ejemplo de salida: ['a', 'a', 'a']

const obtLasLetter=(arr)=>{

    return arr.map((item)=>item.slice(-1))
}

console.log(obtLasLetter(['Mamon', 'Banana', 'Cereza']));

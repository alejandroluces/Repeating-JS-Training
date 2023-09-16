// Ejercicio 43: Convertir temperaturas de Celsius a Fahrenheit

// Planteamiento: Crea una función que tome un array de temperaturas en grados Celsius como entrada y utilice el método map para convertirlas a grados Fahrenheit utilizando la fórmula (C * 9/5) + 32.
// Ejemplo de entrada: [0, 25, 100]
// Ejemplo de salida: [32, 77, 212]

const convertFa=(arrGrados)=>{

    return arrGrados.map((item)=>item*9/5+32)

}

console.log(convertFa([0, 25, 100]));

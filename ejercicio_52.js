// Ejercicio 52: Convertir grados Fahrenheit a Celsius

// Planteamiento: Crea una función que tome un array de temperaturas en grados Fahrenheit como entrada y utilice el método map para
//  convertirlas a grados Celsius utilizando la fórmula C = (F - 32) * 5/9.
// Ejemplo de entrada: [32, 77, 212]
// Ejemplo de salida: [0, 25, 100]


const calculateGCelsius=(grade)=>{

    return grade.map((item)=>(item-32)*5/9)

}

console.log(calculateGCelsius([32, 77, 212]));
